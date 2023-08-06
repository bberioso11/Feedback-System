import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/authenticate/logout").then(() => {
      navigate("/");
    });
  }, []);
  return null;
};

export default Logout;
