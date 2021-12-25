import React from "react";
import ReactDOM from "react-dom";
import A from "./Component/A";
import "./index.css";

function App() {
  return (
    <>
      <div style={{marginLeft:"20px"}}>
       <A />
      </div>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
