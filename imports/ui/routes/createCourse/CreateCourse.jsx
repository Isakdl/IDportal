import React, { Component, PropTypes } from 'react';
// Task component - represents a single todo item
export default class CreateCourse extends Component {

  handleSubmit()
  {

  }
  render() {
    return (
        <div className="container">
        <h1>Create Course</h1>

          <form className="new-course" onSubmit={this.handleSubmit.bind(this)} >
            Course name:
            <input type="Course name" ref="name" placeholder="Example" 
              onChange={this.handleSubmit.bind(this)}/>
            Last name:
            <input type="ECTS" ref="hp" placeholder="Example"/>
            Description:
            <input type="Description" ref="description" placeholder="Example"/>
            Webpage:
            <input type="Webpage" ref="url" placeholder="Example"/>
            Period:
            <input type="Period" ref="period" placeholder="Example"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
    );
  }
}

