import { Router } from "express";

import { CREATEPOST, GETALLPOSTS } from "../controllers/post.controller.js";

import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.route("/post").post(
    upload.fields([
        {
            name: "picture",
            maxCount: 1
        }
    ]),
    CREATEPOST
    )
router.route("/get/posts").get(GETALLPOSTS)

export default router;