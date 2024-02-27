import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Faculty from "./components/Faculty";
import Counter from "./components/Counter";
import Form from "./components/Form";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/fc" element={<FunctionComponent />}></Route>
        <Route path="/cc" element={<ClassComponent />}></Route>
        <Route path="/faculties" element={<Faculty />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/form" element={<Form />}></Route>

      </Route>
    </Routes>
  </BrowserRouter>
);
