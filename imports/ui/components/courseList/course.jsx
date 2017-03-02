import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Course extends Component {
  render() {
    return (
      <li>{this.props.course.title}</li>
    );
  }
}

Course.propTypes = {
  course: PropTypes.object.isRequired,
};
