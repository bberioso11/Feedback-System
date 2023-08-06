import UserData from "../model/userData.js";
const userdata = new UserData();

export const getUserData = async (req, res) => {
  const userid = req.userid;
  if (!userid) {
    res.json(null);
  } else {
    const response = await userdata.getUserData(req.userid);
    if (response.isSuccess) {
      res.json(response.data);
    } else {
      res.json(response.error);
    }
  }
};
