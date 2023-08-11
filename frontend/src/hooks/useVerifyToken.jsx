import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useVerifyToken = () => {
  const [isValid, setIsValid] = useState(null);
  useEffect(() => {
    axios.get("/api/authenticate/verifytoken").then((token) => {
      if (token.data.isExisting) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    });
  }, []);
  return { isValid };
};

export default useVerifyToken;
