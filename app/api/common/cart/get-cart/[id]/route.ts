import dbConnect from "@/app/lib/dbConnect";
import Cart from "@/app/model/Cart";
import { NextResponse } from "next/server";

export async function GET(req : Request, context: any) {
    try {
        await dbConnect()
        const { params } = context
        const cartData = await Cart.find({
            user_id : params.id
        }).populate('product_id')
        return NextResponse.json({
            data : cartData
        }, { status : 200})
    } catch (error: any) {
        return NextResponse.json({
            error : error.message
        })
    }
}