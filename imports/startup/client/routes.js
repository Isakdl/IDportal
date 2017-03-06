import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// route components
import App from '../../ui/App.jsx';
import CreateCourse from '../../ui/routes/createCourse/CreateCourse.jsx';
import CourseOverview from '../../ui/routes/courseOverview/CourseOverview.jsx';
import NotFoundPage from '../../ui/routes/notFound/notFound.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={CourseOverview} />
      <Route path="create" component={CreateCourse}/>
      <Route path="*" component={NotFoundPage}/> 
    </Route>
  </Router>
);
