import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';


// Task component - represents a single todo item
export default class CourseItem extends Component {

  render() {
    return (
  
 
      <div>
        <h2>{this.props.course.title}</h2>
        <button onClick={this.deleteCourse.bind(this)}>Delete</button>
      </div>

    );
  }

  deleteCourse(){
    Meteor.call('courses.remove', this.props.course._id);
  }
}

CourseItem.propTypes = {
  course: PropTypes.object.isRequired,
};
