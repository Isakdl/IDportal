import React, { Component, PropTypes } from 'react';
import AccountsUIWrapper from '../../AccountsUIWrapper.jsx';
export default class Header extends Component {
 clicked(){
  console.log('Courses of ID ')
 }
  render() {
    return (

      <div className ="Header">
        
         <header>
          <h2>ID Portal</h2>
          <AccountsUIWrapper/>
          <button className = "button_1" Click={this.clicked}> Courses </button>
        </header>
			   

      </div>

    );
  }
}

