import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import regex from "../../utils/regex";
import useVerifyToken from "../hooks/useVerifyToken";
import axios from "axios";

const Login = () => {
  useVerifyToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email cannot be empty!",
        didClose: () => {
          emailRef.current.focus();
        },
      });
      return;
    }
    if (!password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password cannot be empty!",
        didClose: () => {
          passwordRef.current.focus();
        },
      });
      return;
    }
    if (!regex(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password can't contain special characters!",
        didClose: () => {
          passwordRef.current.focus();
        },
      });
      return;
    }

    const { data } = await axios.post(
      "/authenticate/login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!data.isSuccess) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.message || data.error,
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Success",
      text: data.message,
      didClose: () => navigate("/"),
    });
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}>
        <div className="row border rounded shadow p-3 p-md-5">
          <div className="col">
            <form onSubmit={handleLogin}>
              <div className="text-center mb-3">
                <h3>Login</h3>
              </div>
              <div className="inputs">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    ref={emailRef}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    ref={passwordRef}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
              </div>
              <div className="text-center mb-2">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div>
                <p className="fs-6 fw-light mb-0">
                  Dont have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
