import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import HomePage from './modules/practice/pages/HomePage';
import ChatsPage from './modules/practice/pages/ChatsPage';
import SecondPage from './modules/practice/pages/SecondPage';
import './App.scss';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/chats" component={ChatsPage} />
      <Route exact path="/second" component={SecondPage} />
    </div>
  </Router>
);
