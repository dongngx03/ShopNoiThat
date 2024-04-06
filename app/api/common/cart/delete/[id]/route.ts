import dbConnect from "@/app/lib/dbConnect";
import Cart from "@/app/model/Cart";
import { NextResponse } from "next/server";

export async function DELETE(req : Request, context: any) {
    try {
        await dbConnect()
        const { params } = context
        const cartData = await Cart.findByIdAndDelete(params.id)
        if(cartData)
        return NextResponse.json({
            message : `xoa thanh cong cart id = ${params.id}`
        }, { status : 200})
    } catch (error: any) {
        return NextResponse.json({
            error : error.message
        })
    }
}