import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import HomePage from './modules/practice/pages/HomePage';
import Conv from './modules/practice/pages/Conv';
import SecondPage from './modules/practice/pages/SecondPage';
import ConvEmptyII from './modules/practice/pages/ConvEmptyII';
import CreateConv from './modules/practice/pages/CreateConv';
import ConvEmptyO from './modules/practice/pages/ConvEmptyO';
import ConvEmptyI from './modules/practice/pages/ConvEmptyI';
import ConvWebEmpty from './modules/practice/pages/ConvWebEmpty';
import ActivitiesEmpty from './modules/practice/pages/ActivitiesEmpty';
import ActivitiesHome from './modules/practice/pages/ActivitiesHome';
import ActivitiesRecord from './modules/practice/pages/ActivitiesRecord';
import ProfileActivities from './modules/practice/pages/ProfileActivities';
import ProfileDevices from './modules/practice/pages/ProfileDevices';
import ProfileTeacher from './modules/practice/pages/ProfileTeacher';
import ConvTrial from './modules/practice/pages/ConvTrial';
import './App.scss';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Conv" component={Conv} />
      <Route exact path="/second" component={SecondPage} />
      <Route exact path="/ConvEmptyII" component={ConvEmptyII} />
      <Route exact path="/ConvEmptyO" component={ConvEmptyO} />
      <Route exact path="/ConvEmptyI" component={ConvEmptyI} />
      <Route exact path="/CreateConv" component={CreateConv} />
      <Route exact path="/ConvWebEmpty" component={ConvWebEmpty} />
      <Route exact path="/ActivitiesEmpty" component={ActivitiesEmpty} />
      <Route exact path="/ActivitiesHome" component={ActivitiesHome} />
      <Route exact path="/ActivitiesRecord" component={ActivitiesRecord} />
      <Route exact path="/ProfileActivities" component={ProfileActivities} />
      <Route exact path="/ProfileDevices" component={ProfileDevices} />
      <Route exact path="/ProfileTeacher" component={ProfileTeacher} />
      <Route exact path="/ConvTrial" component={ConvTrial} />
    </div>
  </Router>
);
