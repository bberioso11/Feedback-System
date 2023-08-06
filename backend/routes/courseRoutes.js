import express from "express";
import { allCourses } from "../controller/courseCtlr.js";
const router = express.Router();

router.get("/all-courses", allCourses);

export default router;
