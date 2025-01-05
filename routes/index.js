import express from "express";
import authRoute from "./authRoutes.js";
import userRoute from "./authRoutes.js";
import postRoute from "./postRoute.js";


const router = express.Router();

router.use(`/auth`,authRoute);//auth/register
router.use(`/users`, userRoute);
router.use(`/posts`, postRoute);

export default router;