import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const useUserData = () => {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/api/user/userdata").then((response) => {
      setUserData(response.data);
    });
  }, []);
  return userData;
};

export default useUserData;
