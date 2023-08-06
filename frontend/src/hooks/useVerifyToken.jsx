import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useVerifyToken = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/authenticate/verifytoken").then((token) => {
      if (token.data.isExisting) {
        navigate("/");
      }
    });
  }, []);
};

export default useVerifyToken;
