import React, { Component, PropTypes } from 'react';
import AccountsUIWrapper from '../login/AccountsUIWrapper.jsx';
import './style.css';
import { Router, browserHistory } from 'react-router';


export default class Header extends Component {

  render() {
    return (
      <header>
      <div className ="Header">
          <div className ="SignIn">

          </div>
          <button  className="menu_button" onClick={() => browserHistory.push('/create')} > Courses </button>
          
        </div>
</header>
    );
  }
}
