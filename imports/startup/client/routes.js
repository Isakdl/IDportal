import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// route components
import App from '../../ui/App.jsx';
import CreateCourse from '../../ui/routes/createCourse/CreateCourse.jsx';
import CourseOverview from '../../ui/routes/courseOverview/CourseOverview.jsx';
import NotFoundPage from '../../ui/routes/notFound/notFound.jsx';
import Course from '../../ui/routes/course/course.jsx';
import EventEmitter from 'wolfy87-eventemitter';


var eventEmitter = new EventEmitter();


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={CourseOverview} eventEmitter={eventEmitter}/>
      <Route path="create" component={CreateCourse} eventEmitter={eventEmitter}/>
      <Route path="course" component={Course} eventEmitter={eventEmitter}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
