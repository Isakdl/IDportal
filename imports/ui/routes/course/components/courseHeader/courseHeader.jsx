import React, { Component, PropTypes } from 'react';
import './style.css';

export default class CourseHeader extends Component {
  render() {
    return (
      		<section id= "course_1">
					<h1>{this.props.title}</h1>

					<nav id= "quickfacts">
						<ul className="quickfacts_course_1">
							<li>{this.props.ects}</li>
							<li>{this.props.level}</li>
							<li>{this.props.period}</li>
              <li>Votes {this.props.score}</li>
						</ul>
					</nav>
				</section>
    );
  }
}

CourseHeader.propTypes = {
  title: PropTypes.string.isRequired,
  ects: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
