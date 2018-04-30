import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./modules/practice/pages/HomePage";
import Two from "./modules/practice/pages/SecondPage/Two";

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/two" component={Two} />
    </div>
  </Router>
);
