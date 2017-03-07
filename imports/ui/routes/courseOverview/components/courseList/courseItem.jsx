import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import './style.css';

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
            <button>UP</button>
            {this.props.course.score}67
            <button>DOWN</button>
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

  deleteCourse(){
    Meteor.call('courses.remove', this.props.course._id);
  }

  editCourse(){

  }

}

CourseItem.propTypes = {
  course: PropTypes.object.isRequired,
};
