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

      <div onClick={this.props.onClick} className="courseItemContainer">

        <div className="courseWrapper">
          <div className="courseTextInfoBox">
            <p className="courseInfoTitle">{this.props.course.title}</p>
            <div className="courseInfoExtras">
              <p className="courseInfoText">{this.props.course.ects} hp</p>
              <p className="courseInfoText">{this.props.course.period}</p>
              <p className="courseInfoText">{this.props.course.speed}</p>
            </div>
          </div>
          <div className="courseScoreBox">
            <button onClick={(proxy) => {proxy.stopPropagation(); this.upvote()}}>UP</button>
            {this.props.course.score}
            <button onClick={(proxy) => {proxy.stopPropagation(); this.downvote()}}>DOWN</button>
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
          <button onClick={(proxy) => {proxy.stopPropagation(); this.editCourse()}}>Edit</button>
          <button onClick={(proxy) => {proxy.stopPropagation(); this.deleteCourse()}}>Delete</button>
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
