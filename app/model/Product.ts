import mongoose, { Document, Schema } from "mongoose";


export interface Iproduct extends Document {
    name: string;
    price: number;
    description: string;
    image: []
}

const productSchema: Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: Array
        },
        color: {
            type: Array
        },
        quantity: {
            type: Number,
            required: true
        },
        category_id: {
            type: Schema.Types.ObjectId,
            ref: "Categories"
        }

    },
    {
        timestamps: true,
        versionKey: false
    }
)



const Product = mongoose.models.Product || mongoose.model<Iproduct>("Product", productSchema)

export default Product