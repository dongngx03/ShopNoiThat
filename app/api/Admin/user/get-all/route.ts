import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/model/User";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    try {
        await dbConnect();
        const userData = await User.find()

        return NextResponse.json({
            message: "thành công",
            user: userData
        })

    } catch (error: any) {
        return NextResponse.json({
            error: error.name
        }, { status: 500 })
    }
}