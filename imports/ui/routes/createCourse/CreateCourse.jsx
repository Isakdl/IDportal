import React, { Component, PropTypes } from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import constants from './../../../constants/apiConstants';
// Task component - represents a single todo item
export default class CreateCourse extends Component {

  handleSubmit(event)
  {
    const target = event.target;
    const title = target.title.trim();
    const ects = target.ects.trim();
    const speed = target.speed.trim();
    const url = target.url.trim();
    const period = target.period.trim();
    
    if (failed)
    {
      this.setState(
      {
        
      });
    }
    Meteor.call(constants.COURSES_INSERT, title, ects, speed, description, url,
        period);
  
  }

  render() {
    return (
        <div className="containerCreateCourse">
          <h1>Create Course</h1>

          <form className="new-course" >
            Course name:
            <input className="courseInput" type="text" name="title" 
              placeholder="Prototyputveckling av mobila applikationer" min="4" 
              max="250"/>
            ECTS:
            <input className="courseInput" type="text" name="ects" min="1" max="3"
              placeholder="7.5"/>
            Speed:
            <input className="courseInput" type="text" name="speed" min="3" max="3"
              placeholder="50%"/>
            Description:
            <input className="courseInput" type="text" name="description" max="2000"
              placeholder="Example"/>
            Webpage:
            <input className="courseInput" type="text" name="url" max="2000"
              placeholder="https://www.umu.se/utbildning/kurser/prototyputveckling-for-mobila-applikationer/"/>
            Period:

            <select className="courseInput" name="period">
              <option value="block1">Block 1</option>
              <option value="block1a">Block 1a</option>
              <option value="block1b">Block 1b</option>
              <option value="block2">Block 2</option>
              <option value="block2a">Block 2a</option>
              <option value="block2b">Block 2b</option>
              <option value="block3">Block 3</option>
              <option value="block3a">Block 3a</option>
              <option value="block3b">Block 3b</option>
              <option value="block4">Block 4</option>
              <option value="block4a">Block 4a</option>
              <option value="block4b">Block 4b</option>
            </select>
  
            <input type="button" onClick={() => this.handleSubmit()} 
              value="Submit"/>
          </form>
        </div>
    );
  }
}
