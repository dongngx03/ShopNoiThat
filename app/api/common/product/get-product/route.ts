import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/model/Product";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();

        const product = await Product.find();
        if (product) return NextResponse.json({ success: true, data: product }, { status: 200 })
        return NextResponse.json({ success: false, message: "get product failed , try again " }, { status: 400 })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}