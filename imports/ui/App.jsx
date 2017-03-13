import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {browserHistory} from 'react-router';
import { Meteor } from 'meteor/meteor';
import EventEmitter from 'wolfy87-eventemitter';

import { Courses } from '../api/courses.js';
import Header from './components/Header/Header.jsx'
import CourseOverview from './routes/courseOverview/CourseOverview.jsx';
import CreateCourse from './routes/createCourse/CreateCourse.jsx';
import CourseView from './routes/course/course.jsx';

import Constants from '/imports/constants/eventConstants';
import RouteConstants from '/imports/constants/routeConstants';


// App component - represents the whole app
export default class App extends Component {

  constructor (props) {
    super(props);
    //this.setState = this.setState.bind(this);
    this.state = {
      eventEmitter: new EventEmitter(),
      route: RouteConstants.COURSE_OVERVIEW,
      currentCourse: null,
    };

    this.state.eventEmitter.addListener(Constants.PUSH_VIEW_COURSE, this.viewCourse.bind(this));
    this.state.eventEmitter.addListener(Constants.PUSH_EDIT_COURSE, this.createCourse.bind(this));
    this.state.eventEmitter.addListener(Constants.PUSH_CREATE_COURSE, this.createCourse.bind(this));
    this.state.eventEmitter.addListener(Constants.PUSH_OVERVIEW_COURSE, this.overviewCourse.bind(this));
  }

  overviewCourse(){
    this.setState({
      route: RouteConstants.COURSE_OVERVIEW,
      currentCourse: null,
    });
  }

  createCourse(course) {
    this.setState({
      route: RouteConstants.COURSE_CREATE,
      currentCourse: course,
    });
  }

  viewCourse(course) {
    this.setState({
      route: RouteConstants.COURSE_VIEW,
      currentCourse: course,
    });
  }

  render() {
    return (
      <div className="container">
        <Header eventEmitter={this.state.eventEmitter}/>
        {this.getRoute()}
      </div>
    );
  }

  getRoute(){
    switch(this.state.route){
      case RouteConstants.COURSE_OVERVIEW:
        return <CourseOverview eventEmitter={this.state.eventEmitter}/>
      case RouteConstants.COURSE_VIEW:
        return <CourseView course={this.state.currentCourse} />
      case RouteConstants.COURSE_CREATE:
        return <CreateCourse eventEmitter={this.state.eventEmitter} course={this.state.currentCourse} />
      default:
        return <CourseOverview eventEmitter={this.state.eventEmitter}/>
    }

  }
}
//<li><Link to="/create">Create stuff</Link></li>
//<li><a href="/overview" class="active">Test</a></li>
