import dbConnect from "@/app/lib/dbConnect";
import Category from "@/app/model/Category";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        await dbConnect();

        const categoryList = await Category.find();

        return NextResponse.json({
            list : categoryList
        }, { status : 200})
    } catch (error : any) {
        return new NextResponse(JSON.stringify(error.message))
    }
}