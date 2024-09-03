import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Error, Blog } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
