import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./modules/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index path="/" element={<Hello />} />
          <Route path="h" element={<Hello2 />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

const Hello = () => {
  return <h1>Hello</h1>;
};

const Hello2 = () => {
  return <h1>Hello</h1>;
};
