import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class CourseItem extends Component {
  render() {
    return (
      <div>
        <li>{this.props.course.title}</li>
      </div>
    );
  }
}

CourseItem.propTypes = {
  course: PropTypes.object.isRequired,
};
