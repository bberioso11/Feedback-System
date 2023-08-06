import React, { useEffect, useState } from "react";
import axios from "axios";
const useDepartments = () => {
  const [departments, setDepartments] = useState();

  useEffect(() => {
    axios.get("/api/department/getall-departments").then((response) => {
      setDepartments(response.data);
    });
  }, []);
  return departments;
};

export default useDepartments;
