import mongoose, { Schema } from "mongoose";


export interface ICategory extends Document {
    name : string
}

const categorySchema : Schema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
)

const Category = mongoose.models.Category || mongoose.model<ICategory>("Category", categorySchema)

export default Category