import React from "react";
import { Routes, Route } from "react-router-dom";
import PageWrapper from "../../components/common/PageWrapper";
import MainPage from "../MainPage";
import NotFoundPage from "../NotFoundPage";
import OnePostPage from "../OnePostPage";
import PostsPage from "../PostsPage";
import RegistrationPage from "../RegistrationPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<OnePostPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
export default App;
