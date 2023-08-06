import Course from "../model/course.js";

const course = new Course();

export const allCourses = async (req, res) => {
  const data = await course.allCourses();
  res.json(data);
};
