import express from "express";
import {
  questionsList,
  choicesList,
  submitFeedback,
  deleteFeedback,
} from "../controller/feedbackCtlr.js";
const router = express.Router();

router.get("/questions-list", questionsList);
router.get("/choices-list", choicesList);
router.post("/submit-feedback", submitFeedback);
router.delete("/delete-feedback", deleteFeedback);
export default router;
