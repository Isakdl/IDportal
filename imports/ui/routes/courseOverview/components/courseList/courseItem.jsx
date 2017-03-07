import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import './style.css';

//import ArrowDown from ;

// Task component - represents a single todo item
export default class CourseItem extends Component {

  render() {
    return (


      <div className="courseItemContainer">
        <h2>{this.props.course.title}</h2>
        <button onClick={this.deleteCourse.bind(this)}>Delete</button>
        <img src='./../../../../../assets/ic_keyboard_arrow_down_black_24px.svg' />
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
