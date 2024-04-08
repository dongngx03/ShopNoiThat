import dbConnect from "@/app/lib/dbConnect";
import Blog from "@/app/model/Blog";

import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();
        // get all blog
        const allBlog = await Blog.find()
        if (allBlog) {
            return NextResponse.json({
                blog: allBlog
            }, { status: 200 })
        } else {
            return NextResponse.json({
                message: "The server is having an error, please wait a moment"
            }, { status: 400 })
        }
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}   