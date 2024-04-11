import dbConnect from "@/app/lib/dbConnect";
import Order from "@/app/model/Order";
import { NextResponse } from "next/server";


export async function PUT(req: Request, context: any) {
    try {
        await dbConnect();
        const data = await req.json()
        const { params } = context

        // hủy đơn hàng 
        // check xem đơn hàng trong tình trạng chấp nhận hay chưa 
        const checkOrder = await Order.findById(params.id)
        if (checkOrder?.status === "accept") {
            return NextResponse.json({
                message: "Đơn hàng đã được chập nhận ,không thay đổi dc  "
            }, { status: 403 })
        }
        
        // đổi trảng thái thành hủy 
        const changeStatus = await Order.findByIdAndUpdate(params.id, data, { new: true })
        return NextResponse.json({
            message: "đổi trạng thái thành công",
            newOrder: changeStatus
        })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}