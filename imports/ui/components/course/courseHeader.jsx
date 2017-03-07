import React, { Component, PropTypes } from 'react';
export default class CourseHeader extends Component {
  render() {
    return (
      		<section id= "course_1">
					<h1>{this.props.title}</h1>
					
					<nav id= "quickfacts">
						<ul className="quickfacts_course_1">
							<li>{this.props.hp}</li>
							<li>{this.props.level}</li>
							<li>{this.props.period}</li>
						</ul>
					</nav>
				</section>
    );
  }
}

CourseHeader.propTypes = {
  title: PropTypes.string.isRequired,
  hp: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
};
