import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useValidateDepartment from "../hooks/useValidateDepartment";
import FeedbackQuestions from "../components/FeedbackQuestions";

const Department = () => {
  const { name } = useParams();
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
