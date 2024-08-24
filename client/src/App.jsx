import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Layout from "./Layout";
import IndexPage from "./components/IndexPage";
import RegisterPage from "./components/RegisterPage";
import axios from "axios";


axios.defaults.baseURL = 'http://localhost:4000'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
