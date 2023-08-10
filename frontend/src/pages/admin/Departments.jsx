import React from "react";
import TableUserReviews from "../../components/admin/TableUserReviews";
import { useParams, Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
const Departments = () => {
  const { name } = useParams();
  const url = window.location.origin + "/department/" + name;
  return (
    <>
      <div className="container-fluid mt-3 mb-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="d-sm-flex justify-content-between ">
              <nav className="" aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="perpertual-primary" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {name}
                  </li>
                </ol>
              </nav>
              <div className="mb-2">
                <button
                  className="btn btn-sm btn-primary me-2 "
                  style={{ background: "#700b00", borderColor: "#700b00" }}>
                  Generate All Report
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#view_qr"
                  style={{ background: "#700b00", borderColor: "#700b00" }}>
                  View QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
        <TableUserReviews department={name} />
      </div>
      <div
        className="modal fade"
        id="view_qr"
        tabIndex="-1"
        aria-labelledby="view_qr"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                QR Code: {name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <QRCodeCanvas
                  value={url}
                  size={200}
                  bgColor={"#ffffff"}
                  fgColor={"#000000"}
                  level={"L"}
                  includeMargin={false}
                />
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

export default Departments;
