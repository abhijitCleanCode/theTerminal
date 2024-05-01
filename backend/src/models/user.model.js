import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: [true, "great mind do think alike, username is already taken"],
        index: true,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email is already taken"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    avatar: {
        type: String, // cloudinary url
        required: [true, "please upload your image"]
    },
},
{
    timestamps: true
}
)

export const User = mongoose.model("User", userSchema);