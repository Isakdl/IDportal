import React, { Component, PropTypes } from 'react';
import './style.css';


export default class CourseAbout extends Component {
  render() {
    return (
      <div className ="SectionWrapper">
         <h2>OM KURSEN</h2>
			   <p>{this.props.info}</p>
      </div>

    );
  }
}

CourseAbout.propTypes = {
  info: PropTypes.string.isRequired,

};
