import dbConnect from "@/app/lib/dbConnect";
import User, { IUser } from "@/app/model/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

// create 
export async function POST(req: Request) {
    await dbConnect();
    try {
        const data = await req.json();
        // check user
        const email = await User.findOne({ email: data.email })

        if (email) {
            return new NextResponse("Email đã tồn tại, vui lòng thử email khác ", { status: 400 })
        }
        // hash
        const hassPw = await bcrypt.hash(data.password, 10);

        const newUser = await User.create({
            ...data,
            password : hassPw
        })
        return NextResponse.json(newUser)
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        })
    }
}