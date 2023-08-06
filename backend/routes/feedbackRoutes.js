import express from "express";
import {
  questionsList,
  choicesList,
  submitFeedback,
} from "../controller/feedbackCtlr.js";
const router = express.Router();

router.get("/questions-list", questionsList);
router.get("/choices-list", choicesList);
router.post("/submit-feedback", submitFeedback);
export default router;
