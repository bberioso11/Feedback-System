import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/images/perpetual-logo.png";
import useUserData from "../hooks/userData";
import { UserDataContext } from "../contexts/UserDataContext";

const Header = () => {
  const userData = useContext(UserDataContext);
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
                  <li>
                    <Link to="/review/cashier" className="dropdown-item">
                      Cashier
                    </Link>
                  </li>
                  <li>
                    <Link to="/review/Canteen" className="dropdown-item">
                      Canteen
                    </Link>
                  </li>
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
                  <li>
                    <Link to="/departments/cashier" className="dropdown-item">
                      Cashier
                    </Link>
                  </li>
                  <li>
                    <Link to="/departments/canteen" className="dropdown-item">
                      Canteen
                    </Link>
                  </li>
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
