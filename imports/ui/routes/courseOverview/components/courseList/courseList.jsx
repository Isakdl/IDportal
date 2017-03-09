import React, { Component, PropTypes } from 'react';
import CourseItem from './courseItem.jsx';
import { Router, browserHistory } from 'react-router';
import './style.css';

// Task component - represents a single todo item
export default class CourseList extends Component {

  render() {
    return (
      <ul>
        {this.getCourses()}
      </ul>
    );
  }


  getCourses(){
    return (
      this.props.courses.map((course) => (
        <CourseItem key={course._id} course={course} onClick={this.onClickCourse.bind(this)} />
      ))
    );
  }

  onClickCourse(course){
    browserHistory.push('/course');
  }

}

CourseList.propTypes = {
  // This component gets the course to display through a React prop.
  // We can use propTypes to indicate it is required
  courses: PropTypes.array.isRequired,
};
