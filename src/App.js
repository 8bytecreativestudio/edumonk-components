import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './modules/practice/pages/HomePage';

export default () => (
  <Router>
    <Route exact path="/" component={HomePage} />
  </Router>
);
