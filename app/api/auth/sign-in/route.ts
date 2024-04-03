import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/model/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// login
export async function POST(req: Request) {
    await dbConnect();
    try {
        const { email, password } = await req.json();
        const checkEmail = await User.findOne({
            email: email
        })
        if (!email) {
            return new NextResponse("Email không tồn tại", { status: 404 })
        }
        const checkPw = await bcrypt.compare(password, checkEmail.password)
        if (!checkPw) {
            return new NextResponse("mật khẩu không trùng khớp", { status: 400 })
        }

        const token = jwt.sign({ id: checkEmail._id, role: checkEmail.role }, "decode_key", { expiresIn: "1d" })
        checkEmail.password = undefined;
        return NextResponse.json({ user: checkEmail, token: token })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        })
    }
}