import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: [true, "Title must be unique"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    picture: {
        type: String, // cloudinary url
        required: [true, "Picture is required"]
    },
},
{
    timestamps: true
}
);

export const Post = mongoose.model('Post', PostSchema);