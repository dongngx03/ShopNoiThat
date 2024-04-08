import mongoose, { Schema } from "mongoose";

export interface IBlog extends Document {
    title : string,
    content : string,
    image_avatar : string
}

const blogSchema: Schema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        content: {
            type: String,
            require: true
        },
        image_avatar : {
            type : String,
            require : true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema)
export default Blog