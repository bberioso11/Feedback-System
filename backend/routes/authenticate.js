import express from "express";
import {
  register,
  login,
  logout,
  verifyToken,
} from "../controller/authenticate.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

// Validate Token
router.get("/verifytoken", verifyToken);

export default router;
