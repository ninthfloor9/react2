/* 게임판 전체 component */

import React from "react";
import ReactDOM from "react-dom/client";
import { Game } from "./components/game";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
