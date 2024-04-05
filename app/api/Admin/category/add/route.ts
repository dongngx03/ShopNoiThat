import dbConnect from "@/app/lib/dbConnect";
import Category from "@/app/model/Category";
import CheckAdmin from "@/middleware/CheckAdmin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const isAuthorized = await CheckAdmin(req);
        if (isAuthorized) {
            const data = await req.json();
            const newCategory = await Category.create(data)
            return NextResponse.json({
                data: newCategory
            }, { status: 201 })
        } else {
            return new NextResponse("you 're not admin", { status: 403 })
        }
    } catch (error: any) {
        return new NextResponse(JSON.stringify(error.message), { status: 500 })
    }
}