import Feedback from "../model/feedback.js";

const feedback = new Feedback();
export const questionsList = async (req, res) => {
  const response = await feedback.questionsList();
  res.json(response);
};

export const choicesList = async (req, res) => {
  const response = await feedback.choicesList();
  res.json(response);
};

export const submitFeedback = async (req, res) => {
  const response = await feedback.submitFeedback(req.body);
  res.json(response);
};

export const deleteFeedback = async (req, res) => {
  const id = req.query.id;
  const response = await feedback.deleteFeedback(id);
  res.json(response);
};
