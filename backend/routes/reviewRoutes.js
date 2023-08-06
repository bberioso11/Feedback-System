import express from "express";
import { getReview } from "../controller/reviewCtlr.js";

const router = express.Router();

router.get("/getreview", getReview);
export default router;
