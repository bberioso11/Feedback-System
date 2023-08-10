import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { UserDataContext } from "../contexts/UserDataContext";
import { useNavigate } from "react-router-dom";
import useGetQuestions from "../hooks/useGetQuestions";
import { QRCodeCanvas } from "qrcode.react";
import { useLocation } from "react-router-dom";

const FeedbackQuestions = ({ department }) => {
  const location = useLocation();
  const url = window.location.origin + location.pathname;
  const questions = useGetQuestions();
  const [choices, setChoices] = useState();
  const userData = useContext(UserDataContext);
  const navigate = useNavigate();

  const [answerForm, setAnswerForm] = useState({
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
    question5: 0,
    suggestion: "",
    comment: "",
    department: department,
    name: userData.firstname + " " + userData.lastname,
    userid: userData.id,
  });

  useEffect(() => {
    axios.get(`/api/feedback/choices-list`).then((response) => {
      setChoices(response.data);
    });
  }, []);

  if (!questions || !choices) {
    return <>Loading</>;
  }

  const handleForm = (event) => {
    event.preventDefault();
    if (Object.values(answerForm).some((value) => !value)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please answer all questions",
      });
      return;
    }
    const ratings =
      (parseInt(answerForm.question1) +
        parseInt(answerForm.question2) +
        parseInt(answerForm.question3) +
        parseInt(answerForm.question4) +
        parseInt(answerForm.question5)) /
      5;
    console.log(ratings);
    axios
      .post(`/api/feedback/submit-feedback`, {
        ...answerForm,
        ratings: ratings,
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Feedback submitted succesfully!",
        }).then(() => navigate("/review/" + department));
      });
  };

  const handleOnChange = (event) => {
    const { value, name } = event.target;
    setAnswerForm(() => ({ ...answerForm, [name]: value }));
  };
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 border rounded shadow px-5 py-4 my-3">
          <form onSubmit={handleForm}>
            <div className="d-flex justify-content-between mb-3">
              <div className="my-auto">
                <h3 className="mb-4 fw-semibold">
                  {department.charAt(0).toUpperCase() +
                    department.slice(1) +
                    " "}
                  Feedback Questions:
                </h3>
              </div>
              <QRCodeCanvas
                value={url}
                size={100}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
              />
            </div>
            {questions.map((data, indexQ) => (
              <div key={indexQ} className="mb-3">
                <label className="mb-2 ">
                  {indexQ + 1}. {data.question}
                </label>
                {choices.map((data, indexC) => (
                  <div key={indexC} className="form-check  ms-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={"question" + (indexQ + 1)}
                      id={data.item + (indexQ + 1)}
                      value={data.value}
                      onChange={handleOnChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={data.item + (indexQ + 1)}>
                      {data.item}
                    </label>
                  </div>
                ))}
              </div>
            ))}
            <div className="mb-3">
              <label className="mb-2">
                Please share any specific areas that you would like us to
                improve, in your own words. Your feedback will help us make
                improvements in the near future.
              </label>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a suggestion here"
                  id="floatingTextarea"
                  style={{ height: "100px" }}
                  name="suggestion"
                  onChange={handleOnChange}></textarea>
                <label htmlFor="floatingTextarea">
                  Suggestion of improvements
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="mb-2">
                Choose a Comments that will be posted on the website along with
                your name:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="comment"
                onChange={handleOnChange}>
                <option value="" defaultValue>
                  Select an option
                </option>
                <option value="You do wonderful work">
                  You do wonderful work
                </option>
                <option value="A splendid job!">A splendid job!</option>
                <option value="Impressive">Impressive</option>
                <option value="Astounding">Astounding</option>
                <option value="Awesome">Awesome</option>
                <option value="Clear, concise, and complete!">
                  Clear, concise, and complete!
                </option>
                <option value="Dedicated effort">Dedicated effort</option>
                <option value="Exceptional">Exceptional</option>
                <option value="Fantastic">Fantastic</option>
                <option value="Fine">Fine</option>
                <option value="Fine job">Fine job</option>
                <option value="Good work/Good job">Good work/Good job</option>
                <option value="I commend you for your thorough work">
                  I commend you for your thorough work.
                </option>
                <option value="I like the way you've handled this.">
                  I like the way you've handled this.
                </option>
                <option value="Keep up the good work">
                  Keep up the good work.
                </option>
                <option value="Prestigious work">Prestigious work</option>
                <option value="Thoughtful">Thoughtful!</option>
                <option value="Poor">Poor</option>
                <option value="Bad">Bad</option>
              </select>
            </div>
            <div className="d-flex mt-3">
              <button type="submit" className="ms-auto btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackQuestions;
