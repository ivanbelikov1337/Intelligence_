import mongoose from "mongoose";

const {Schema} = mongoose;


const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        userAvatar: {
            type: String,
            required: true,
        },
        counter: {
            type: Number,
        },
        usersLiked: {
            type: Array,
        },
    },
    {timestamps: true}
);


export default mongoose.models.Post  || mongoose.model("Post", postSchema);
