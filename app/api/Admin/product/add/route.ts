import dbConnect from "@/app/lib/dbConnect";
import CheckAdmin from "@/middleware/CheckAdmin";
import { NextResponse } from "next/server";
import Joi from "joi"
import Product from "@/app/model/Product";

const productValid = Joi.object({
    name: Joi.string().required().empty().min(10).max(100),
    price: Joi.number().required().empty().min(1000000).max(1000000000),
    description: Joi.string().required().empty().min(20),
    image: Joi.array().empty().required(),
    color : Joi.string().empty().required(),
    quantity : Joi.number().required().min(10),
    category_id : Joi.string().required()
})


export async function POST(req: Request) {
    try {
        await dbConnect();
        // authenication 
        const isAuthenticated = await CheckAdmin(req);

        if (isAuthenticated) {
            const data = await req.json();
            const { error } = productValid.validate(data, { abortEarly: false });

            if (error) {
                const errors = error.details.map(e => e.message);
                return NextResponse.json({
                    success: false,
                    error: errors
                }, { status: 400 })
            }

            const newProduct = await Product.create({
                ...data
            })

            if (newProduct) {
                return NextResponse.json({
                    success: true,
                    newProduct: newProduct,
                    message: "create product successfully!"
                }, { status: 201 })
            } else {
                return NextResponse.json({
                    success: false,
                    message: "failed to create the product , please try again!"
                }, { status: 404 })
            }

        } else {
            return NextResponse.json({
                success: false,
                message: "you are not authorized.",
                auth: isAuthenticated
            }, { status: 403 })
        }
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        })
    }
}