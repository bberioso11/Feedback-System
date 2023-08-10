import React, { useState, useEffect } from "react";
import axios from "axios";
const useGetQuestions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get(`/api/feedback/questions-list`).then((response) => {
      setQuestions(response.data);
    });
  }, []);
  return questions;
};

export default useGetQuestions;
