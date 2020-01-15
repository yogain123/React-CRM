import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Add from "./Add";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import history from "./history";
import { Provider } from "react-redux";
import { createAppStore } from "./Redux";

const routing = (
  <Provider store={createAppStore()}>
    <Router history={history}>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/add/:index?" exact component={Add} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
