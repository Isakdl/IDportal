import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Course extends Component {
  render() {
    return (
      <li>{this.props.course.text}</li>
    );
  }
}
 
Course.propTypes = {
  // This component gets the course to display through a React prop.
  // We can use propTypes to indicate it is required
  course: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  week: PropTypes.object.isRequired,
  studyrate: PropTypes.object.isRequired,
};
