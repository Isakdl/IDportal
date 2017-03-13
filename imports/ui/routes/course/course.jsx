import React, { Component, PropTypes } from 'react';
import CourseHeader from './components/courseHeader/courseHeader.jsx';
import CourseAbout from './components/courseAbout/courseAbout.jsx';
import CourseComments from './components/courseComments/courseComments.jsx';
import './style.css';
import Constants from '/imports/constants/eventConstants';


export default class Course extends Component {

  constructor (props) {
    super(props);
    this.state = {
      eventEmitter: this.props.eventEmitter,
      course: this.props.course,
    };

  }

  render() {

    if(this.state.course){
      return (
        <div className ="content">
    			<CourseHeader title={this.state.course.title}
    				hp={this.state.course.ects}
    				level= {this.state.course.level}
    				period={this.state.course.period}/>
    			<CourseAbout info={this.state.course.description}/>
    			<CourseComments text={this.state.text}/>
    		</div>

      );
    } else {
      return (
        <div>
          No course data
        </div>
      )
    }

  }
}

Course.propTypes = {
  //course: PropTypes.object.isRequired,
};
