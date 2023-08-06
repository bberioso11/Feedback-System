import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/images/perpetual-logo.png";
import useUserData from "../hooks/userData";
import { UserDataContext } from "../contexts/UserDataContext";
import axios from "axios";
import useDepartments from "../hooks/useDepartments";

const Header = () => {
  const userData = useContext(UserDataContext);
  const departments = useDepartments();
  if (!departments) {
    return (
      <>
        <div>Loading</div>
      </>
    );
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "#700B00" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" width="230px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-white"
                  aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Reviews
                </a>
                <ul className="dropdown-menu">
                  {departments.map((department, index) => (
                    <li key={index}>
                      <Link
                        to={"/review/" + department.name}
                        className="dropdown-item">
                        {department.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Departments
                </a>
                <ul className="dropdown-menu">
                  {departments.map((department, index) => (
                    <li key={index}>
                      <Link
                        to={
                          userData
                            ? "/departments/" + department.name
                            : "/login"
                        }
                        className="dropdown-item">
                        {department.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {userData?.account_type === "admin" ? (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Accounts
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/admin/accounts/bsit"
                          className="dropdown-item">
                          BSIT
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/accounts/bscs"
                          className="dropdown-item">
                          BSCS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/accounts/non-student"
                          className="dropdown-item">
                          Non Student
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : null}
            </ul>
            <div className="ms-auto">
              {userData ? (
                <>
                  {/* <Link to="/profile" className="text-white btn-sm p-btn-primary me-2">
            Profile
          </Link> */}
                  <Link to="/logout" className="text-white p-btn-primary">
                    Logout
                  </Link>
                </>
              ) : (
                <Link to="/login" className="text-white p-btn-primary">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
