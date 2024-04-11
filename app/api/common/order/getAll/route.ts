import dbConnect from "@/app/lib/dbConnect";
import Order from "@/app/model/Order";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    try {
        await dbConnect();
        const order = await Order.find().populate("user_id")
        return NextResponse.json(order, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}