import Review from "../model/review.js";

const review = new Review();
export const getReview = async (req, res) => {
  const department = req.query.department;
  const answerid = req.query.answerid;
  if (department) {
    const response = await review.getAllReviewDepartment(department);
    res.json(response);
  } else if (answerid) {
    const response = await review.getReview(answerid);
    res.json(response);
  }
};
