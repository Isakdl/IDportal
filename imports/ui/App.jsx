import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
      <div className="container">
        <header>
          <h1>Kursportalen för ID</h1>
        </header>
        <ul>
          <li><a href="/create" class="active">Test</a></li>
        </ul>

        <AccountsUIWrapper />

        {this.props.children}
      </div>
    );
  }
}
//<li><Link to="/create">Create stuff</Link></li>
//<li><a href="/overview" class="active">Test</a></li>
