import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// routes import
import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

export { app }