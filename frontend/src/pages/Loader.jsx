import React from "react";
import { BeatLoader } from "react-spinners";
const Loader = () => {
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}>
        <BeatLoader
          className="d-flex justify-content-center align-items-center"
          color="#700B00"
          size={20}
        />
      </div>
    </>
  );
};

export default Loader;
