import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import './style.css';
import constants from './../../../../../constants/apiConstants';

//import ArrowDown from ;
//<img src='./../../../../../assets/ic_keyboard_arrow_down_black_24px.svg' />
// Task component - represents a single todo item
export default class CourseItem extends Component {

  render() {
    return (

      <div className="courseItemContainer">

        <div className="courseWrapper">
          <div className="courseTextInfoBox">
            {this.props.course.title}
            <div className="courseInfoExtras">
              {this.props.course.ects}
              {this.props.course.period}
              {this.props.course.speed}
            </div>
          </div>
          <div className="courseScoreBox">
            <button onClick={this.upvote.bind(this)}>UP</button>
            {this.props.course.score}
            <button onClick={this.downvote.bind(this)}>DOWN</button>
          </div>

        </div>
        {this.getAdminButtons()}
      </div>

    );
  }

  getAdminButtons(){
    if(Meteor.user() && Meteor.user().profile.admin){
      return (
        <div className="courseAdminButtonContainer">
          <button onClick={this.editCourse.bind(this)}>Edit</button>
          <button onClick={this.deleteCourse.bind(this)}>Delete</button>
        </div>
      );
    }

    return null;

  }

  upvote(){
    Meteor.call(constants.COURSE_UPVOTE, this.props.course._id);
  }

  downvote(){
    Meteor.call(constants.COURSE_DOWNVOTE, this.props.course._id);
  }

  deleteCourse(){
    Meteor.call(constants.COURSE_REMOVE, this.props.course._id);
  }

  editCourse(){

  }

}

CourseItem.propTypes = {
  course: PropTypes.object.isRequired,
};
