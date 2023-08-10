import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader";
import AccountsTable from "../../components/AccountsTable";

const Accounts = () => {
  const [isValid, setIsValid] = useState();
  const [loader, setLoader] = useState(true);
  const { course } = useParams();
  const [accounts, setAccounts] = useState();
  useEffect(() => {
    axios.get("/api/account/all-courses").then((response) => {
      setIsValid(
        response.data.some((data) => data.name.toLowerCase() === course)
      );
    });
  }, [course]);

  useEffect(() => {
    axios.get(`/api/account/get-accounts?course=${course}`).then((response) => {
      setAccounts(response.data);
      setLoader(false);
    });
  }, [course]);

  if (loader) {
    return <Loader />;
  }
  if (!isValid) {
    return (
      <>
        <div>{course} not found</div>
      </>
    );
  }

  return (
    <>
      <div className="container mt-3 ">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <nav className="mb-4" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link className="perpertual-primary" to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {course}
                </li>
              </ol>
            </nav>
            <AccountsTable accounts={accounts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
