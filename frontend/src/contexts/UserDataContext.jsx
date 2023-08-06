import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import Loader from "../pages/Loader";
const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios.get("/api/user/userdata").then((response) => {
      setUserData(response.data);
      setLoader(false);
    });
  }, []);
  if (loader) {
    return <Loader />;
  }
  return (
    <>
      <UserDataContext.Provider value={userData}>
        {children}
      </UserDataContext.Provider>
    </>
  );
};

export { UserDataContext, UserDataProvider };
