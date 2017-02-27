import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Courses } from '../api/courses.js';
import Course from './Course.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Meteor } from 'meteor/meteor';

// App component - represents the whole app
class App extends Component {
  /*
   *getCourses() {
   *  return this.props.courses.map((course) => (
   *    <Course key={Course._id} course={course} />
   *  ));
   *}
   */
 
  renderCourses() {
    return this.getCourses().map((course) => (
      <Course key={course._id} course={course} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <AccountsUIWrapper />
 
        <ul>
          {this.renderCourses()}
        </ul>
      </div>
    );
  }
} 

App.propTypes = {
  courses: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    courses: Course.find({}).fetch(),
  };
}, App);
