import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TrendingMovies from "./pages/Movies/trendingMovies";
import Home from "./pages/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/trending" element={<TrendingMovies />}></Route>
        </Routes>
    </BrowserRouter>
);
