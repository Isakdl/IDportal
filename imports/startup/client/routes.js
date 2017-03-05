import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import App from '../../ui/App.jsx';
import CreateCourse from '../../ui/routes/createCourse/CreateCourse.jsx';
import NotFoundPage from '../../ui/routes/not-found/not-found.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/create" component={CreateCourse}/>
      <Route path="*" component={NotFoundPage}/> //NotFoundPage
    </Route>
  </Router>
);
