import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import SignIn from "./pages/signIn/SignIn";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default App;
