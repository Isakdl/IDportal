import React, { Component, PropTypes } from 'react';
import AccountsUIWrapper from '../../AccountsUIWrapper.jsx';
export default class Header extends Component {
 
  render() {
    return (

      <div className ="Header">
        
         <header>
          <h2>ID Portal</h2>

         <AccountsUIWrapper/>
        </header>
			   

      </div>

    );
  }
}

// Header.propTypes = {
//    : PropTypes.object.isRequired,
// };