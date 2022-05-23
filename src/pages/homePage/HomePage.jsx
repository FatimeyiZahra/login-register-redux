import jwt_decode from "jwt-decode";
import React from "react";
import { useSelector } from "react-redux";
const HomePage = () => {
  const token = useSelector((state) => state.AuthReducer.token);
  // const localToken= localStorage.getItem("auth");
  const decode = jwt_decode(token);
  const userName = decode["FullName"];
  return (
    <>
      {userName?<h1>{userName}</h1>:<h1>homePage</h1>}
    </>
  )
};

export default HomePage;
