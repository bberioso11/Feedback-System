import Account from "../model/account.js";
const account = new Account();

export const getAllCourses = async (req, res) => {
  const response = await account.getAllCourses();
  res.json(response);
};

export const getAccounts = async (req, res) => {
  const course = req.query.course;
  const response = await account.getAccounts(course);
  res.json(response);
};

export const deleteAccount = async (req, res) => {
  const id = req.params.userid;
  const response = await account.deleteAccount(id);
  res.json(response);
};
