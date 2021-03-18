import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
import "./responsive.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
