//another entrypoint that imports components and any global styles through id= root in index.html
import React from "react";
import ReactDOM from "react-dom/client"; //updated the import by adding client
import "./styles/App.css"; // Adjust the path if necessary
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import App from "./App";

library.add(faPalette);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
