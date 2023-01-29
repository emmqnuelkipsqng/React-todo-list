import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Code", completed: false },
  { id: "todo-2", name: "Sleep", completed: false },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App subject="Emmanuel" />);

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
