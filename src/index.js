import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './assets/styles/styles.css';
/*import App from "./containers/robot/home";*/
import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(
    <Router>
        <App />
    </Router>
);