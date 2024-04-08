import dbConnect from "@/app/lib/dbConnect";
import Blog from "@/app/model/Blog";
import { NextResponse } from "next/server";


export async function GET(req: Request, context: any) {
    try {
        await dbConnect();
        const { params } = context
        const blogDetail = await Blog.findById(params.id)
        return NextResponse.json({
            blogDetail: blogDetail
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}   