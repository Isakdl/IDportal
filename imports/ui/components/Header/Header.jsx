import React, { Component, PropTypes } from 'react';
import AccountsUIWrapper from '../login/AccountsUIWrapper.jsx';
import './style.css';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';


export default class Header extends Component {
  clicked(){
    console.log('Courses of ID ')
  }
  createCourse() {
    if(Meteor.user() && Meteor.user().profile.admin) {
      return (
          <button 
            onClick={() => browserHistory.push('create')}
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
          <button 
            onClick={() => browserHistory.push('/')}
            className="button_1"> 
            Home
          </button>
          {this.createCourse()}
          
        </header>


      </div>

    );
  }
}


