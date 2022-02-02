import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Apps from "./page/Apps";
import Home from "./page/Home";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/apps/:id" element={<Apps />}></Route>
        </Routes>
      </Layout>
    </React.Fragment>
  );
}

export default App;
