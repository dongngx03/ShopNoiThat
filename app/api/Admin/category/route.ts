import dbConnect from "@/app/lib/dbConnect";
import Category from "@/app/model/Category";
import CheckAdmin from "@/middleware/CheckAdmin";
import Joi from "joi";
import { NextResponse } from "next/server";

const categoryValid = Joi.object({
    name: Joi.string().required()
})

export async function POST(req: Request) {
    try {
        await dbConnect()
        const isAuthenticated = await CheckAdmin(req)
        if (isAuthenticated) {
            const data = await req.json()
            const { error } = await categoryValid.validate(data, { abortEarly: false })
            if (error) {
                const errors = error.details.map(e => e.message)
                return NextResponse.json({
                    error: errors
                }, { status: 400 })
            }

            const newCategory = await Category.create(data)
            return NextResponse.json({
                newCategory: newCategory
            }, { status: 201 })
        } else {
            return NextResponse.json({
                success: false,
                message: "you are not authorized.",
                auth: isAuthenticated
            }, { status: 403 })
        }
    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}