import { Router } from "express";

import { SIGNUPUSER } from "../controllers/user.controller.js";

import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.route("/signup").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ]),
    SIGNUPUSER
);

export default router;