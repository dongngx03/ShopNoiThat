import mongoose, { Document, Schema } from "mongoose";

export interface Iproduct extends Document {
    name: string;
    price: number;
    description: string;
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
        }
    }
)

const Product = mongoose.models.Product || mongoose.model<Iproduct>("Product", productSchema)

export default Product