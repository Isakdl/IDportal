import React, { Component, PropTypes } from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import constants from './../../../constants/apiConstants';
// Task component - represents a single todo item
export default class CreateCourse extends Component {

  handleSubmit()
  {
    const title = ReactDOM.findDOMNode(this.refs.name).value.trim();
    Meteor.call(constants.COURSES_INSERT, title);
  }
  render() {
    return (
        <div className="containerCreateCourse">
          <h1>Create Course</h1>

          <form className="new-course" onSubmit={this.handleSubmit.bind(this)} >
            Course name:
            <input className="courseInput" type="Course name" ref="name" placeholder="Example"/>
            Last name:
            <input className="courseInput" type="ECTS" ref="hp" placeholder="Example"/>
            Description:
            <input className="courseInput" type="Description" ref="description" placeholder="Example"/>
            Webpage:
            <input className="courseInput" type="Webpage" ref="url" placeholder="Example"/>
            Period:
            <input className="courseInput" type="Period" ref="period" placeholder="Example"/>
            <input className="courseInput" type="submit" value="Submit"/>
          </form>
        </div>
    );
  }
}
