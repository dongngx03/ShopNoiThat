import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/model/Product";
import CheckAdmin from "@/middleware/CheckAdmin";
import Joi from "joi";
import { NextResponse } from "next/server";

const productValid = Joi.object({
    name: Joi.string().required().empty().min(10).max(100),
    price: Joi.number().required().empty().min(1000000).max(1000000000),
    description: Joi.string().required().empty().min(20),
    image: Joi.array(),
    color : Joi.string().empty().required(),
    quantity : Joi.number().required().min(10),
    category_id : Joi.string().required()
})

export async function PUT(req: Request, context: any) {

    try {
        await dbConnect();
        const isAuthenticated = await CheckAdmin(req);
        const { params } = context
        const data = await req.json();
        const { error } = productValid.validate(data, { abortEarly: false })
        if (error) {
            const errors = error.details.map(e => e.message);
            return NextResponse.json({
                success: false,
                error: errors
            })
        }
        if (isAuthenticated) {
            const findProduct = await Product.findById(params.id);
            if (!findProduct) return NextResponse.json({ success: false, message: "can not find product" })

            const updateProduct = await Product.findByIdAndUpdate(params.id, { ...data }, { new: true })
            if (updateProduct) return NextResponse.json({ success: true, updated: updateProduct })
            return NextResponse.json({ success: false, message: "failed to update, please try again !" })
        } else {
            return NextResponse.json({
                success: false,
                message: "you are not authorized."
            })
        }
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        })
    }
}