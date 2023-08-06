import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import regex from "../../utils/regex";
import useVerifyToken from "../hooks/useVerifyToken";

const Register = () => {
  useVerifyToken();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState();
  const [courses, setCourses] = useState();

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const courseRef = useRef();

  useEffect(() => {
    axios
      .get(`/api/course/all-courses`)
      .then((response) => setCourses(response.data));
  }, []);

  if (!courses) {
    return <div>Loading</div>;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!firstname) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Firstname cannot be empty!",
        didClose: () => {
          firstnameRef.current.focus();
        },
      });
      return;
    }
    if (!lastname) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Lastname cannot be empty!",
        didClose: () => {
          lastnameRef.current.focus();
        },
      });
      return;
    }
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
    if (!course) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Course cannot be empty!",
        didClose: () => {
          courseRef.current.focus();
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
      "/authenticate/register",
      {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        course: course,
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
      text: "Account created successfully",
    });
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setCourse("");
  };
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}>
        <div className="row border rounded shadow p-3 p-md-5">
          <div className="col">
            <form onSubmit={handleRegister}>
              <div className="text-center mb-3">
                <h3>Register</h3>
              </div>
              <div>
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">
                    Firstname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    ref={firstnameRef}
                    value={firstname}
                    onChange={(event) => {
                      setFirstname(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Lastname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    ref={lastnameRef}
                    value={lastname}
                    onChange={(event) => {
                      setLastname(event.target.value);
                    }}
                  />
                </div>
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
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="course" className="form-label">
                    Course
                  </label>
                  <select
                    className="form-select"
                    aria-label="select course"
                    id="course"
                    ref={courseRef}
                    value={course}
                    onChange={(event) => setCourse(event.target.value)}>
                    <option value="" defaultValue>
                      Select Course
                    </option>
                    {courses.map((course, index) => (
                      <option key={index} value={course.name}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="empasswordail"
                    ref={passwordRef}
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="text-center mb-2">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <div className="text-center">
                <p className="fw-light mb-0">
                  Already have an account? <Link to="/login">Sign In</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
