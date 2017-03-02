import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Courses } from '../api/courses.js';
 
import Course from './Course.jsx';
 
// App component - represents the whole app
class App extends Component {
  renderCourses() {
    return this.props.courses.map((course) => (
      <Course key={course._id} course={course} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Kursportalen för ID</h1>
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
    courses: Courses.find({}).fetch(),
  };
}, App);
