import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import useValidateDepartment from "../hooks/useValidateDepartment";
import FeedbackQuestions from "../components/FeedbackQuestions";
import { UserDataContext } from "../contexts/UserDataContext";

const Department = () => {
  let location = useLocation();
  const { name } = useParams();
  const userData = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/login", { state: { from: `/department/${name}` } });
    }
  }, []);
  const isValid = useValidateDepartment(name);
  if (!isValid) {
    return (
      <>
        <div>Department cannot find</div>
      </>
    );
  }

  return (
    <>
      <FeedbackQuestions department={name} />
    </>
  );
};

export default Department;
