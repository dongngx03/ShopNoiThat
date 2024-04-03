import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/model/Product";
import CheckAdmin from "@/middleware/CheckAdmin";
import { NextResponse } from "next/server";


export async function DELETE(req: Request, context: any) {
    try {
        await dbConnect();
        const isAuthenticated = await CheckAdmin(req)
        const { params } = context
        if (isAuthenticated) {
            const findProduct = await Product.findById(params.id)
            if(!findProduct) return NextResponse.json({ success : false, message : "can not find product"}, { status: 404})
            const removeProduct = await Product.findByIdAndDelete(params.id)
            if (removeProduct) return NextResponse.json({ success: true, message: `delete product id is ${params.id} successfully!` }, { status : 200})
            return NextResponse.json({ success: false, message: `delete failed!!, No products were found with the id is ${params.id}` }, {status: 404})
        } else {
            return NextResponse.json({
                success: false,
                message: "you are not authorized."
            },
            {
                status : 403
            })
        }
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        },
        { 
            status: 500
        })
    }
}