import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import ReactDOM from "react-dom";
import { Meteor } from 'meteor/meteor';
import { Courses } from '../../../api/courses.js';

import CourseList from './components/courseList/courseList.jsx';

// Task component - represents a single todo item
export class CourseOverview extends Component {

  render() {
    return (
        <div className="container">
          <CourseList courses={this.props.courses}/>
        </div>
    );
  }
}

CourseOverview.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    courses: Courses.find({}).fetch(),
  };
}, CourseOverview);
