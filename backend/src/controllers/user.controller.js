import bcrypt from "bcrypt"
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.util.js";

export const SIGNUPUSER = async (request, response) => {
    try {
        // get user details from frontend
        const { name, username, email, password } = request.body;

        // validation - not empty
        if ([name, username, email, password].some((field) => field?.trim() === "")) {
            return response.status(400).json({ message: "All fields are required" });
        }
        
        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // check either username field or email field in the user document matches the username or email provided 
        const existedUser = await User.findOne({
            $or: [{ username }, { email }]
        })
        
        // check if user already exist: username or email
        if (existedUser) {
            return response.status(409).json({ message: "User with email or username already exist" })
        }

        // check for images, avatar
        const avatarLocalPath = request.files?.avatar[0]?.path
        console.log("backend :: src :: controllers :: user.controller.js :: SIGNUPUSER: ", request.files);
        if (!avatarLocalPath) {
            return response.status(400).json({ message: "Avatar is required" });
        }

        // upload avatar to cloudinary
        const avatar = await uploadOnCloudinary(avatarLocalPath);

        if (!avatar) {
            return response.status(400).json({ message: "Avatar is required" });
        }

        // create the user and save it to db
        const user = await User.create({
            name,
            avatar: avatar.url,
            email, 
            password,
            username: username.toLowerCase()
        })

        // check if user is created and saved to db
        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        )

        if (!createdUser) {
            return response.status(500).json({ message: "Something went wrong while registering the user" })
        }

        return response.status(201).json({ message: "User register successfully" })
    
} catch (error) {
    return response.status(500).json({ message: "Error while signing up" })
}
}