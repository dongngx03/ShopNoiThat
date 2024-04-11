import dbConnect from "@/app/lib/dbConnect";
import Order from "@/app/model/Order";
import Joi from "joi";
import { NextResponse } from "next/server";

const orderValid = Joi.object({
    priceTotal: Joi.number().required(),
    user_id: Joi.string().required(),
    productList: Joi.array().required(),
    status: Joi.string().required(),
    city: Joi.string().required(),
    district: Joi.string().required(),
    wards: Joi.string().required(),
    addressDetail: Joi.string().required(),
    phone : Joi.string().required()
})

export async function POST(req: Request) {
    try {
        await dbConnect();
        const data = await req.json();
        const { error } = await orderValid.validate(data, { abortEarly: false })
        if (error) {
            const errors = error.details.map(e => e.message)
            return NextResponse.json({
                errors: errors
            }, { status: 400 })
        }
        // add order
        const order = await Order.create(data)
        return NextResponse.json({
            data: order
        }, { status: 201 })

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}