import React, { Component, PropTypes } from 'react';
import { Courses } from './../../../api/courses';

// Task component - represents a single todo item
export default class CreateCourse extends Component {

  handleSubmit()
  {
    Courses.insert({title: "Databas kurs"});
  }
  render() {
    return (
        <div className="containerCreateCourse">
          <h1>Create Course</h1>

          <form className="new-course" onSubmit={this.handleSubmit.bind(this)} >
            Course name:
            <input className="courseInput" type="Course name" ref="name" placeholder="Example"
              onChange={this.handleSubmit.bind(this)}/>
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
