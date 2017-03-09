import React, { Component, PropTypes } from 'react';
import CourseHeader from './components/courseHeader/courseHeader.jsx';
import CourseAbout from './components/courseAbout/courseAbout.jsx';
import CourseComments from './components/courseComments/courseComments.jsx';
import './style.css';

export default class Course extends Component {
  render() {
    return (
    <div className ="content">
			<CourseHeader title={this.props.course.title}
				hp={this.props.course.hp}
				level= {this.props.course.level}
				period={this.props.course.period}/>
			<CourseAbout info={this.props.course.info}/>
			<CourseComments text={this.props.text}/>

			<section id= "course_2"></section>
			<section id= "course_3"></section>
			<section id= "course_4"></section>
			<section id= "course_5"></section>
		</div>

    );
  }
}

Course.propTypes = {
  //course: PropTypes.object.isRequired,
};
