import { Route, Routes } from "react-router-dom";
import Css from "./components/Css";
import Header from "./components/Header";
import Html from "./components/Html";
import JavaScript from "./components/JavaScript";
import Navigation from "./components/Navigation";
import React from "./components/React";
import Sanity from "./components/Sanity";

function App() {
  return (
    <>
      <Header title={"Resussarkiv"} />
      <Navigation />
      <Routes>
        <Route index path="/html" element={<Html />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/react" element={<React />} />
        <Route path="/headless-cms" element={<Sanity />} />
        <Route path="/css" element={<Css />} />
      </Routes>
    </>
  );
}

export default App;
