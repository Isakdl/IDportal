import React, { Component, PropTypes } from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import constants from './../../../constants/apiConstants';
// Task component - represents a single todo item
export default class CreateCourse extends Component {

  componentWillMount()
  {
    let course = this.props.course
    this.state =
    {
      title              : course? course.title : '',
      isTitleValid       : true,
      level              : course? course.level : '',
      isLevelValid       : true,
      ects               : course? course.ects : '',
      isEctsValid        : true,
      speed              : course? course.speed : '',
      isSpeedValid       : true,
      description        : course? course.description : '',
      isDescriptionValid : true,
      url                : course? course.url : '',
      isUrlValid         : true
    }
  }


  isValidMinLength(length, s, sId) {

    (s.length >= length) ? this.setState({[sId] : true})
                          : this.setState({[sId] : false})
  }


  handleSubmit(event)
  {
    ts = this.state

    if (ts.isTitleValid && ts.isEctsValid && ts.isSpeedValid
                     && ts.isDescriptionValid && ts.isUrlValid && ts.isLevelValid)
    {
    Meteor.call(constants.COURSES_INSERT, ts.title, ts.level, ts.ects, ts.speed,
        ts.description, ts.url, this.refs.period);
    }
  }

  render() {
    return (
        <div className="containerCreateCourse">
          <h1>Create Course</h1>
          <form className="new-course" >
            <font color={this.state.isTitleValid ? "black" : "red"}>
              Course Title:
            </font>
            <input className="courseInput" type="text" name="title"
              onChange={(e) => this.setState({title:e.target.value})}
              onBlur={(e) => this.isValidMinLength (1, this.state.title
                                                   ,"isTitleValid")}
              style={{borderColor:this.state.isTitleValid ? "gray" : "red"}}
              placeholder="Prototyputveckling av mobila applikationer" />

            <font color={this.state.isLevelValid ? "black" : "red"}>
              Level:
            </font>
            <input className="courseInput" type="text" name="ects"
              onChange={(e) => this.setState({level:e.target.value})}
              onBlur={(e) => this.isValidMinLength (1, this.state.level
                                                   , "isLevelValid")}
              style={{borderColor:this.state.isLevelValid ? "gray" : "red"}}
              placeholder="A"/>

            <font color={this.state.isEctsValid ? "black" : "red"}>
              ECTS:
            </font>
            <input className="courseInput" type="text" name="ects"
              onChange={(e) => this.setState({ects:e.target.value})}
              onBlur={(e) => this.isValidMinLength (1, this.state.ects
                                                   , "isEctsValid")}
              style={{borderColor:this.state.isEctsValid ? "gray" : "red"}}
              placeholder="7.5"/>

            <font color={this.state.isSpeedValid ? "black" : "red"}>
              Speed:
            </font>
            <input className="courseInput" type="text" name="speed"
              onChange={(e) => this.setState({speed:e.target.value})}
              onBlur={(e) => this.isValidMinLength (2, this.state.speed
                                                   , "isSpeedValid")}
              style={{borderColor:this.state.isSpeedValid ? "gray" : "red"}}
              placeholder="50%"/>

            <font color={this.state.isDescriptionValid ? "black" : "red"}>
              Description:
            </font>
            <input className="courseInput" type="text" name="description"
              onChange={(e) => this.setState({description:e.target.value})}
              onBlur={(e) => this.isValidMinLength (5, this.state.description
                                                   ,"isDescriptionValid")}
              style={{borderColor:this.state.isDescriptionValid ? "gray" : "red"}}
              placeholder="Example"/>

            <font color={this.state.isUrlValid ? "black" : "red"}>
              Webpage:
            </font>
            <input className="courseInput" type="text" name="url" max="2000"
              onChange={(e) => this.setState({url:e.target.value})}
              onBlur={(e) => this.isValidMinLength (5, this.state.url
                                                   ,"isUrlValid")}
              style={{borderColor:this.state.isUrlValid ? "gray" : "red"}}
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

            <input type="button" onClick={(e) => this.handleSubmit(e)}
              value="Submit"/>
          </form>
        </div>
    );
  }
}

CreateCourse.propTypes = {
  course: PropTypes.object,
};
