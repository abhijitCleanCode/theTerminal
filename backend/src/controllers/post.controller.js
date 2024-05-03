import { Post } from "../models/post.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.util.js";

export const CREATEPOST = async (request, response) => {
    try {
        //get post details from frontend
        const { title, description } = request.body;
        console.log(request.body);

        // check for files, images
        const pictureLocalPath = request.files?.picture[0]?.path
        console.log(pictureLocalPath);

        if (!pictureLocalPath) {
            return response.status(400).json({ message: "Picture is required1" });
        }

        // upload picture to cloudinary
        const picture = await uploadOnCloudinary(pictureLocalPath);
        console.log("backend :: src :: controllers :: user.controller.js :: avatar :: ", picture);
        console.log(picture);

        if (!picture) {
            return response.status(400).json({ message: "picture is required2" });
        }

        // create the post and save it to db
        const post = await Post.create({
            title,
            description,
            picture: picture.url,
        })

        return response.status(201).json({ message: "Post created successfully" })
    } catch (error) {
        return response.status(500).json({ message: "Error while posting a post" })
    }
}

export const GETALLPOSTS = async (request, response) => {
    const { page = 1, limit = 10 } = request.query;

    try {
        // Calculate skip for pagination
        const skip = (page - 1) * limit;

        const posts = await Post.find({})
        .skip(skip)
        .limit(5);

        // Get total documents count
        const total = await MyDataModel.countDocuments({});

        return response.status(200).json(posts, total);
    } catch (error) {
        return response.status(500).json({message: "Server error while fetching posts"})
    }
}