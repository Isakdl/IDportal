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
    const ects = ReactDOM.findDOMNode(this.refs.ects).value.trim();
    const speed = ReactDOM.findDOMNode(this.refs.speed).value.trim();
    const description =
      ReactDOM.findDOMNode(this.refs.description).value.trim();
    const url = ReactDOM.findDOMNode(this.refs.url).value.trim();
    const period = "block 1";
    Meteor.call(constants.COURSES_INSERT, title, ects, speed, description, url,
        period);

  }
  renderOptions()
  {
    for (i=1; i<4; i++)
    {
    }
  }
  render() {
    return (
        <div className="containerCreateCourse">
          <h1>Create Course</h1>

          <form className="new-course" >
            Course name:
            <input className="courseInput" type="text" ref="name"
              placeholder="Prototyputveckling av mobila applikationer" min="4"
              max="250"/>
            ECTS:
            <input className="courseInput" type="text" ref="ects" min="1" max="3"
              placeholder="7.5"/>
            Speed:
            <input className="courseInput" type="text" ref="speed" min="3" max="3"
              placeholder="50%"/>
            Description:
            <input className="courseInput" type="text" ref="description" max="2000"
              placeholder="Example"/>
            Webpage:
            <input className="courseInput" type="text" ref="url" max="2000"
              placeholder="https://www.umu.se/utbildning/kurser/prototyputveckling-for-mobila-applikationer/"/>


            <input type="button" onClick={this.handleSubmit.bind(this)}
              value="Submit"/>
          </form>
        </div>
    );
  }
}
