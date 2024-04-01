import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/model/Product";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();

    try {
        const products = await Product.find({})

        return NextResponse.json(products)
    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}
export async function POST(req : Request) {
    await dbConnect();

    try {
        const data = await req.json();
        const products = await Product.create(data)
        return NextResponse.json(products)
    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}