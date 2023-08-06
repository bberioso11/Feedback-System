import express from "express";
import { checkDepartment } from "../controller/departmentApi.js";
const router = express.Router();

router.get("/check-department", checkDepartment);

export default router;
