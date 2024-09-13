import { render } from "preact";
import { App } from "./App.jsx";

import "bootstrap/dist/js/bootstrap.min.js";
import "./index.scss";

import reportWebVitals from "./reportWebVitals";

render(<App />, document.getElementById("app"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
