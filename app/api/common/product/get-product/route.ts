import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/model/Product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        await dbConnect();
        const url = new URL(req.url)
        const searchParrams = new URLSearchParams(url.searchParams)
        console.log(searchParrams);

        // Số bản ghi trên mỗi trang
        let perPage: any = searchParrams.get('_limit');
        // Trang cần lấy
        let pageNumber: any = searchParrams.get('_page'); // Đổi số trang tùy ý
        const totalProduct = await Product.countDocuments({})
        if (!perPage) {
            perPage = 5
        }
        if (!pageNumber) {
            pageNumber = 1
        }
        const totalPage = totalProduct / perPage
        const product = await Product.find({}).populate('category_id').skip((pageNumber - 1) * perPage).limit(perPage);
        if (product) return NextResponse.json({
            success: true,
            limit: perPage,
            page: pageNumber,
            totalProduct: totalProduct,
            totalPage : +Math.ceil(totalPage),
            data: product
        }, { status: 200 })
        return NextResponse.json({ success: false, message: "get product failed , try again " }, { status: 400 })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}