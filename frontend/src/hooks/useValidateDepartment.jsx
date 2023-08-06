import { useEffect, useState } from "react";
import axios from "axios";
const useValidateDepartment = (name) => {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/department/check-department?name=${name}`)
      .then((response) => {
        setIsValid(response.data.isValid);
      });
  }, [name]);
  return isValid;
};

export default useValidateDepartment;
