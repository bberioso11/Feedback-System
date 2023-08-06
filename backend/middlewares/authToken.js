import jwt from "jsonwebtoken";

export const validateToken = (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) {
    req.userid = null;
  } else {
    try {
      const decodedToken = jwt.verify(token, "e-feedback");
      req.userid = decodedToken.userid;
    } catch (err) {
      req.userid = null;
    }
  }
  next();
};
