import Review from "../model/review.js";

const review = new Review();
export const getReview = async (req, res) => {
  const department = req.query.department;
  const response = await review.getReview(department);
  res.json(response);
};
