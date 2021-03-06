import React, { Component, PropTypes } from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import constants from './../../../constants/apiConstants';
import eventConstants from '/imports/constants/eventConstants'
// Task component - represents a single todo item
export default class CreateCourse extends Component {

  setDefault() {
    let course = this.props.course
      return {
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
        isUrlValid         : true,
        period             : course? course.period : 'Block 1'
      }
  }

  componentWillMount() {
    this.state = this.setDefault()
  }


  isValidMinLength(length, s, sId) {

    (s.length >= length) ? this.setState({[sId] : true})
                          : this.setState({[sId] : false})
  }

  validateNoBlank(){
    ts = this.state
    if (ts.title == '' || ts.ects == '' || ts.speed == '' ||
        ts.description == '' || ts.url =='' || ts.level == '') {
      return false
    }
    return true
  }

  handleEdit(event) {
    ts = this.state

    if (ts.isTitleValid && ts.isEctsValid && ts.isSpeedValid
                     && ts.isDescriptionValid && ts.isUrlValid && 
                     ts.isLevelValid) {
      if (this.validateNoBlank()) {
        Meteor.call(constants.COURSES_EDIT, this.props.course._id, ts.title, 
          ts.ects, ts.speed, ts.description, ts.url, ts.level,
          this.refs.period.value);
          this.props.eventEmitter.emitEvent(eventConstants.PUSH_OVERVIEW_COURSE)
      }
    }
  }

  handleSubmit(event) {
    ts = this.state

    if (ts.isTitleValid && ts.isEctsValid && ts.isSpeedValid
                     && ts.isDescriptionValid && ts.isUrlValid && ts.isLevelValid) {
      if(this.validateNoBlank()){
        Meteor.call(constants.COURSES_INSERT, ts.title, ts.ects, ts.speed, 
            ts.description, ts.url, ts.level, this.refs.period.value);
        this.setState(this.setDefault())
      }
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
              value={this.state.title}
              onChange={(e) => this.setState({title:e.target.value})}
              onBlur={(e) => this.isValidMinLength (1, this.state.title
                                                   ,"isTitleValid")}
              style={{borderColor:this.state.isTitleValid ? "gray" : "red"}}
              placeholder="Prototyputveckling av mobila applikationer" />

            <font color={this.state.isLevelValid ? "black" : "red"}>
              Level:
            </font>
            <input className="courseInput" type="text" name="ects"
              value={this.state.level}
              onChange={(e) => this.setState({level:e.target.value})}
              onBlur={(e) => this.isValidMinLength (1, this.state.level
                                                   , "isLevelValid")}
              style={{borderColor:this.state.isLevelValid ? "gray" : "red"}}
              placeholder="A"/>

            <font color={this.state.isEctsValid ? "black" : "red"}>
              ECTS:
            </font>
            <input className="courseInput" type="text" name="ects"
              value={this.state.ects}
              onChange={(e) => this.setState({ects:e.target.value})}
              onBlur={(e) => this.isValidMinLength (1, this.state.ects
                                                   , "isEctsValid")}
              style={{borderColor:this.state.isEctsValid ? "gray" : "red"}}
              placeholder="7.5"/>

            <font color={this.state.isSpeedValid ? "black" : "red"}>
              Speed:
            </font>
            <input className="courseInput" type="text" name="speed"
              value={this.state.speed}
              onChange={(e) => this.setState({speed:e.target.value})}
              onBlur={(e) => this.isValidMinLength (2, this.state.speed
                                                   , "isSpeedValid")}
              style={{borderColor:this.state.isSpeedValid ? "gray" : "red"}}
              placeholder="50%"/>

            <font color={this.state.isDescriptionValid ? "black" : "red"}>
              Description:
            </font>
            <input className="courseInput" type="text" name="description"
              value={this.state.description}
              onChange={(e) => this.setState({description:e.target.value})}
              onBlur={(e) => this.isValidMinLength (5, this.state.description
                                                   ,"isDescriptionValid")}
              style={{borderColor:this.state.isDescriptionValid ? "gray" : "red"}}
              placeholder="Example"/>

            <font color={this.state.isUrlValid ? "black" : "red"}>
              Webpage:
            </font>
            <input className="courseInput" type="text" name="url" max="2000"
              value={this.state.url}
              onChange={(e) => this.setState({url:e.target.value})}
              onBlur={(e) => this.isValidMinLength (5, this.state.url
                                                   ,"isUrlValid")}
              style={{borderColor:this.state.isUrlValid ? "gray" : "red"}}
              placeholder="https://www.umu.se/utbildning/kurser/prototyputveckling-for-mobila-applikationer/"/>

            Period:

            <select value={this.state.period} className="courseInput" 
            name="period" ref="period">
              <option value="Block 1">Block 1</option>
              <option value="Block 1a">Block 1a</option>
              <option value="Block 1b">Block 1b</option>
              <option value="Block 2">Block 2</option>
              <option value="Block 2a">Block 2a</option>
              <option value="Block 2b">Block 2b</option>
              <option value="Block 3">Block 3</option>
              <option value="Block 3a">Block 3a</option>
              <option value="Block 3b">Block 3b</option>
              <option value="Block 4">Block 4</option>
              <option value="Block 4a">Block 4a</option>
              <option value="Block 4b">Block 4b</option>
            </select>

            <input type="button" onClick={(e) => 
                this.props.course? this.handleEdit(e) : this.handleSubmit(e)}
              value="Submit"/>

          </form>
        </div>
    );
  }
}

CreateCourse.propTypes = {
  course: PropTypes.object,
}
