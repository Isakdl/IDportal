import React, { Component, PropTypes } from 'react';
import AccountsUIWrapper from '../login/AccountsUIWrapper.jsx';
import './style.css';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import eventConstants from '/imports/constants/eventConstants';


export default class Header extends Component {
  clicked(){
    console.log('Courses of ID ')
  }
  createCourse() {
    if(Meteor.user() && Meteor.user().profile.admin) {
      return (
          <button
            onClick={() => this.props.eventEmitter.emitEvent(eventConstants.PUSH_CREATE_COURSE, null)}
            className="button_1">
            Create Course
          </button>
      );
    }

    return null;
  }
  render() {
    return (

      <div className ="Header">

         <header>
          <h2>ID Portal</h2>
          <AccountsUIWrapper/>
          <container className="headerButtonContainer">
            <button
              onClick={() => this.props.eventEmitter.emitEvent(eventConstants.PUSH_OVERVIEW_COURSE)}
              className="button_1">
              Home
            </button> {this.createCourse()}
          </container>
        </header>


      </div>

    );
  }
}
