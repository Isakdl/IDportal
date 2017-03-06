import React, { Component, PropTypes } from 'react';


export default class Course extends Component {
  render() {
    return (
  
 
      <div>
        <li>{this.props.course.title}</li>
      </div>

    );
  }
}

Course.propTypes = {
  course: PropTypes.object.isRequired,
};
