import express from "express";
import { getUserData } from "../controller/userApi.js";
import { validateToken } from "../middlewares/authToken.js";

const router = express.Router();
router.use(validateToken);

router.get("/userdata", getUserData);
export default router;
