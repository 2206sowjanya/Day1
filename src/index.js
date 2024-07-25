import React from "react";
import ReactDOM from "react-dom/client"
// import DataFetching1 from "./DataFetching1";
import App from "./App";


const rootElement=document.getElementById("root");
const rootRef=ReactDOM.createRoot(rootElement)
rootRef.render(<App />)