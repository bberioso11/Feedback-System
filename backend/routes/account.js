import express from "express";
import {
  getAllCourses,
  getAccounts,
  deleteAccount,
} from "../controller/account.js";

const router = express.Router();

router.get("/all-courses", getAllCourses);
router.get("/get-accounts", getAccounts);
router.delete("/delete-account/:userid", deleteAccount);
export default router;
