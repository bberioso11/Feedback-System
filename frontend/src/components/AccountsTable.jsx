import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";

const AccountsTable = ({ accounts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;
  const totalPages = Math.ceil(accounts.length / itemPerPage);

  const lastItemIndex = currentPage + itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const data = accounts.slice(firstItemIndex, lastItemIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        const { data } = axios
          .delete(`/api/account/delete-account/${id}`)
          .then((response) => {
            Swal.fire("Deleted Succesfully!", "", "success");
          });
      }
    });
  };

  const handleEditModal = (id) => {};
  return (
    <>
      <div className="table-responsive">
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((account, index) => (
              <tr key={index}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{account.firstname + account.lastname}</td>
                <td>{account.email}</td>
                <td>
                  <button className="btn btn-outline-secondary btn-sm me-1">
                    <FiEdit2 className="" size={"15"} />
                  </button>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => handleDelete(account.id)}>
                    <AiOutlineDelete className="" size={"15"} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center">
        <ul className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}>
              <Link
                key={index}
                className="page-link"
                onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default AccountsTable;
