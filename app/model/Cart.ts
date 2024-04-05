import mongoose, { Schema } from "mongoose";

export interface ICart extends Document{
    user_id : string,
    
}

const cartSchema : Schema = new mongoose.Schema(
    {
        user_id : {
            type : Schema.Types.ObjectId,
            ref: "User"
        },
        mainPrice : {
            type : Number,
            required : true
        },
        quantity : {
            type : Number,
            required : true
        },
        product_id : {
            type : Schema.Types.ObjectId,
            ref : "Product"
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema)

export default Cart