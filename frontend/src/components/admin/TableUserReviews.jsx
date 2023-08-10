import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import usePagination from "../../hooks/usePagination";
import useGetQuestions from "../../hooks/useGetQuestions";
import Swal from "sweetalert2";
import axios from "axios";
const TableUserReviews = ({ department }) => {
  const { totalPages, currentPage, data, handlePageChange, refreshData } =
    usePagination(`/api/review/getreview?department=${department}`);

  const questions = useGetQuestions();
  const [form, setForm] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    suggestion: "",
    comment: "",
    name: "",
  });

  const handleSetAnswer = (id) => {
    axios
      .get(`/api/review/getreview?answerid=${id}`)
      .then((response) => setForm(response.data));
  };
  const handleChoicesValue = (value) => {
    switch (value) {
      case 1:
        return "Poor";
      case 2:
        return "Below Average";
      case 3:
        return "Average";
      case 4:
        return "Above Average";
      case 5:
        return "Excellent";
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure you want to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        const { data } = axios
          .delete(`/api/feedback/delete-feedback?id=${id}`)
          .then((response) => {
            Swal.fire("Deleted Succesfully!", "", "success");
            refreshData();
          });
      }
    });
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="table-responsive">
            <table className="table border">
              <thead>
                <tr>
                  <th scope="col">
                    <input type="checkbox" />
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Ratings</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => (
                  <tr key={index}>
                    <th scope="row">
                      <input type="checkbox" />
                    </th>
                    <td>{data.name}</td>
                    <td>
                      {Array.from({ length: data.ratings }).map((_, index) => (
                        <AiFillStar color="#700B00" key={index} />
                      ))}
                    </td>
                    <td>{data.date}</td>
                    <td>
                      <button
                        className="btn btn-outline-secondary btn-sm me-1"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => handleSetAnswer(data.id)}>
                        <AiOutlineEye className="" size={"15"} />
                      </button>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => handleDelete(data.id)}>
                        <AiOutlineDelete size={"15"} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-3">
              <nav
                aria-label="Page navigation example"
                className="d-flex justify-content-center mt-3">
                <ul className="pagination">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}>
                      <Link
                        className="page-link"
                        name={index}
                        onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Feedback Form Answer: {form.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="px-3">
                {questions.map((question, index) => {
                  const number = index + 1;
                  const list = "question" + number;
                  return (
                    <div key={index}>
                      <p className="mb-2">
                        {question.sort}. {question.question}
                      </p>
                      <p className="ms-3">
                        <span className="fw-semibold">Answer</span>:{" "}
                        {handleChoicesValue(form[list])}
                      </p>
                    </div>
                  );
                })}
                <div className="mb-3">
                  <label className="mb-2 fw-semibold">Suggestions:</label>
                  <textarea
                    className="form-control"
                    placeholder=""
                    style={{ height: "100px" }}
                    value={form.suggestion}
                    readOnly></textarea>
                </div>
                <div className="mb-3">
                  <label className="mb-2 fw-semibold">Comments:</label>
                  <textarea
                    className="form-control"
                    placeholder=""
                    style={{ height: "50px" }}
                    value={form.comment}
                    readOnly></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableUserReviews;
