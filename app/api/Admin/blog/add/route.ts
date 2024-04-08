import dbConnect from "@/app/lib/dbConnect";
import Blog from "@/app/model/Blog";
import CheckAdmin from "@/middleware/CheckAdmin";
import Joi from "joi";
import { NextResponse } from "next/server";

const blogValid = Joi.object({
    title : Joi.string().required(),
    content : Joi.string().required(),
    image_avatar : Joi.string().required()
})

export async function POST(req : Request) {
    try {
        await dbConnect();
        const isAuth = await CheckAdmin(req)

        if(isAuth) {
            const data = await req.json();

            const { error } = await blogValid.validate(data, { abortEarly : false})
            if(error) {
                const errors = error.details.map(e => e.message);
                return NextResponse.json({
                    error : errors
                }, { status : 400})
            }

            // create new blog
            const newBlog = await Blog.create(data)
            if(newBlog) {
                return NextResponse.json({
                    blog : newBlog
                }, { status : 201})
            }else {
                return NextResponse.json({
                    message : "The server is having an error, please wait a moment"
                }, { status : 400})
            }
        }else {
            return NextResponse.json({
                message : "you are not Admin"
            }, { status : 403})
        }
    } catch (error: any) {
        return NextResponse.json({
            error : error.message
        }, { status : 500})
    }
}   