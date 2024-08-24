import React from "react";
import Router from "./router";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default App;
