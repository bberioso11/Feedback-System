import React from "react";
import ReviewTable from "../components/ReviewTable";
import { useParams, Link } from "react-router-dom";
const Review = () => {
  const { department } = useParams();
  return (
    <>
      <div className="container-fluid mt-3 mb-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7">
            <nav className="mb-4" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link className="perpertual-primary" to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {department}
                </li>
              </ol>
            </nav>
            <div className="border rounded shadow p-3">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={"/images/department/" + department + ".jpg"}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={"/images/department/" + department + ".jpg"}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={"/images/department/" + department + ".jpg"}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev">
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next">
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <ReviewTable department={department} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
