import Authenticate from "../model/authenticate.js";
import jwt from "jsonwebtoken";

const auth = new Authenticate();

export const register = async (req, res) => {
  const response = await auth.register(req.body);
  res.json(response);
};

export const login = async (req, res) => {
  const { response, userData } = await auth.login(req.body);
  if (response.isSuccess) {
    const token = jwt.sign({ userid: userData.id }, "e-feedback", {
      expiresIn: "7d",
    });
    res.cookie("authToken", token, {
      secure: true,
      httpOnly: true,
      maxAge: 604800000,
    });
  }
  res.json(response);
};

export const logout = async (req, res) => {
  req.userid = null;
  res.clearCookie("authToken");
  res.json({ isSuccess: true });
};

export const verifyToken = (req, res) => {
  const token = req.cookies.authToken;
  if (token) {
    try {
      jwt.verify(token, "e-feedback");
      res.json({ isExisting: true });
    } catch (err) {
      res.json({ isExisting: false });
    }
  } else {
    res.json({ isExisting: false });
  }
};
