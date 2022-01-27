import React from "react";
import { Routes, Route } from "react-router-dom";
import PageWrapper from "../../components/common/PageWrapper";
import MainPage from "../MainPage";
import RegistrationPage from "../RegistrationPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Route>
    </Routes>
  );
};
export default App;
