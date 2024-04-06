import dbConnect from "@/app/lib/dbConnect";
import Cart from "@/app/model/Cart";
import Joi from "joi";
import { NextResponse } from "next/server";

const cartVaild = Joi.object({
    user_id: Joi.string().required(),
    mainPrice: Joi.number().required(),
    quantity: Joi.number().required(),
    product_id: Joi.string().required()
})

export async function POST(req: Request) {
    try {
        await dbConnect();
        const data = await req.json();
        const { error } = cartVaild.validate(data, { abortEarly: false })
        if (error) {
            const errors = error.details.map(e => e.message);
            return NextResponse.json({
                error: errors
            }, { status: 400 })
        }
        // kiểm tra 
        const checkCart = await Cart.findOne({
            product_id: data.product_id
        })
        if (checkCart) {
            await Cart.findByIdAndUpdate(checkCart._id, {
                quantity: parseInt(checkCart.quantity) + parseInt(data.quantity)
            })

            return NextResponse.json({
                message: "đã cập thêm số lượng cho giỏ hàng của bạn "
            }, { status: 200 })
        } else {
            const newCart = await Cart.create(data)
            return NextResponse.json({
                message: "thêm giỏ hàng thành công",
                data: newCart
            }, { status : 201})
        }
    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}