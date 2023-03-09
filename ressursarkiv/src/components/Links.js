import { React, Route, Routes } from "react-router-dom"
import Html from "./Html"
import Css from "./Css"
import JavaScript from "./JavaScript"
import React from "./React"
import Sanity from "./Sanity"


export default function Links() {
    return [
        <>
        <Routes>
            <Route path="/html" element={<Html/>}/>
            <Route path="/css" element={<Css/>}/>
            <Route path="/javascript" element={<JavaScript/>}/>
            <Route path="/react" element={<React/>}/>
            <Route path="/headless-cms" element={<Sanity/>}/>
        </Routes>
        </>
    ]
}