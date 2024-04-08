import dbConnect from "@/app/lib/dbConnect";
import Blog from "@/app/model/Blog";
import CheckAdmin from "@/middleware/CheckAdmin";
import Joi from "joi";
import { NextResponse } from "next/server";

const blogValid = Joi.object({
    title : Joi.string().empty(),
    content : Joi.string().empty(),
    image_avatar : Joi.string().empty()
})

export async function PUT(req: Request, context: any) {
    try {
        await dbConnect();
        const isAuth = await CheckAdmin(req)
        const { params } = context
        const data = await req.json()
        if (isAuth) {
            // delete blog 
            const { error } = await blogValid.validate(data, { abortEarly : false})
            if(error) {
                const errors = error.details.map(e => e.message);
                return NextResponse.json({
                    error : errors
                }, { status : 400})
            }
            const updateBlog = await Blog.findByIdAndUpdate(params.id, data, {new : true})

        } else {
            return NextResponse.json({
                message: "you are not Admin"
            }, { status: 403 })
        }
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}   