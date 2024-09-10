//another entrypoint that imports components and any global styles through id= root in index.html
import React from "react";
import ReactDOM from "react-dom/client"; //updated the import by adding client
import App from "./App";
import "./styles/App.css"; // Adjust the path if necessary

const root = ReactDOM.createRoot(document.getElementById("root")); //used to create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
