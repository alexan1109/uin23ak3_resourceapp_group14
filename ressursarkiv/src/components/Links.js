import { Route, Routes } from "react-router-dom";
import Css from "./Css";
import Html from "./Html";
import JavaScript from "./JavaScript";
import React from "./React";
import Sanity from "./Sanity";

export default function Links() {

return (
    <>
    <Routes>
    <Route index path="/html" element={<Html />} />
    <Route path="/javascript" element={<JavaScript />} />
    <Route path="/react" element={<React />} />
    <Route path="/headless-cms" element={<Sanity />} />
    <Route path="/css" element={<Css />} />
    </Routes>
    </>
    )
}