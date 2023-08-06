import express from "express";
import {
  checkDepartment,
  getDepartments,
} from "../controller/departmentApi.js";
const router = express.Router();

router.get("/check-department", checkDepartment);

router.get("/getall-departments", getDepartments);

export default router;
