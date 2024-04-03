import dbConnect from "@/app/lib/dbConnect";
import CheckAdmin from "@/middleware/CheckAdmin";
import { NextResponse } from "next/server";
import Joi from "joi"
import Product from "@/app/model/Product";

const productValid = Joi.object({
    name: Joi.string().required().empty(),
    price: Joi.number().required().empty().min(1000000).max(1000000000),
    description: Joi.string().required().empty(),
    image: Joi.array().empty().required()
})


export async function POST(req: Request) {
    try {
        await dbConnect();
        // authenication 
        const isAuthenticated = await CheckAdmin(req);
        
        if (isAuthenticated === true) {
            const data = await req.json();
            const { error } = productValid.validate(data, { abortEarly: false });

            if (error) {
                const errors = error.details.map(e => e.message);
                return NextResponse.json({
                    success: false,
                    error: errors
                })
            }

            const newProduct = await Product.create({
                ...data
            })

            if (newProduct) {
                return NextResponse.json({
                    success: true,
                    newProduct: newProduct,
                    message: "create product successfully!"
                })
            } else {
                return NextResponse.json({
                    success: false,
                    message: "failed to create the product , please try again!"
                })
            }

        } else {
            return NextResponse.json({
                success: false,
                message: "you are not authorized.",
                auth : isAuthenticated
            })
        }
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        })
    }
}