import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const ReviewTable = ({ department }) => {
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;
  const totalPages = Math.ceil(datas.length / itemPerPage);

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const data = datas.slice(firstItemIndex, lastItemIndex);
  useEffect(() => {
    axios
      .get(`/api/review/getreview?department=${department}`)
      .then((response) => {
        setDatas(response.data);
      });
  }, [department]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (!datas) {
    return <div>Loading</div>;
  }
  return (
    <div className="">
      {data.map((review, index) => (
        <div key={index} className="mt-3 border-top">
          <div className="mt-3">
            <h6 className="m-0">{review.name}</h6>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="mb-2" style={{ fontSize: "13px" }}>
              {review.date}
            </p>
            <p className="m-0">Comments:</p>
            <p>{review.comment}</p>
          </div>
        </div>
      ))}
      <div className="mt-3 border-top">
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
  );
};

export default ReviewTable;
