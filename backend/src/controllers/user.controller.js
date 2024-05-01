import bcrypt from "bcrypt"

import { User } from "../models/user.model.js";

export const SIGNUPUSER = async (request, response) => {
try {
    const { name, username, email, password } = request.body;

    // check either username field or email field in the user document matches the username or email provided 
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        return response.status(409).json({ message: "User with email or username already exist" })
    }
} catch (error) {
    return response.status(500).json({ message: "Error while signing up" })
}
}