import mongoose, { Schema } from "mongoose";

export interface IOrder extends Document {

}
const orderSchema: Schema = new mongoose.Schema(
    {
        priceTotal: {
            type: Number,
            require: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        productList: [
            {
                product_id: {
                    type: Schema.Types.ObjectId,
                    ref: "Product"
                },
                quantity: {
                    type: Number,
                    require: true
                },
                price: {
                    type: Number,
                    require: true
                }
            }
        ],
        city: {
            type: String,
            require: true
        },
        district: {
            type: String,
            require: true
        },
        wards: {
            type: String,
            require: true
        },
        addressDetail: {
            type: String,
            require: true
        },
        phone : {
            type : String,
            require : true
        },
        status: {
            type: String,
            enum: ["accept", "failed", "isPending", "success"]
        }

    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order