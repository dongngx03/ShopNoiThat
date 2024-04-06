import dbConnect from "@/app/lib/dbConnect";
import Cart from "@/app/model/Cart";
import { NextResponse } from "next/server";

export async function PUT(req: Response, context: any) {
    try {
        await dbConnect();

        const { params } = context

        // find cart 
        const checkCart = await Cart.findById(params.id)
        if (!checkCart) return NextResponse.json({
            message: "can't find cart"
        }, { status: 404 })

        await Cart.findByIdAndUpdate(params.id, {
            quantity: checkCart.quantity +1
        })
        return NextResponse.json({
            message: "increment successFully!!!"
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}