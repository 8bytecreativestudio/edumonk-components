import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
// import HomePage from './modules/practice/pages/HomePage';
// import ChatsPage from './modules/practice/pages/ChatsPage';
import One from './modules/practice/pages/One';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={One} />
    </div>
  </Router>
);
