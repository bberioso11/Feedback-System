import Department from "../model/department.js";

const department = new Department();

export const checkDepartment = async (req, res) => {
  const name = req.query.name;
  const data = await department.checkDepartment(name);
  res.json(data);
};

export const getDepartments = async (req, res) => {
  const data = await department.getDepartments();
  res.json(data);
};
