import dbConnect from "@/app/lib/dbConnect";
import Blog from "@/app/model/Blog";
import CheckAdmin from "@/middleware/CheckAdmin";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, context: any) {
    try {
        await dbConnect();
        const isAuth = await CheckAdmin(req)
        const { params } = context
        if (isAuth) {
            // delete blog 
            const deleteBlog = await Blog.findByIdAndDelete(params.id)
            if (deleteBlog) return NextResponse.json({
                message: "delete blog item success!"
            }, { status: 200 })
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