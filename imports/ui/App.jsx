import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {browserHistory} from 'react-router';
import { Meteor } from 'meteor/meteor';

import { Courses } from '../api/courses.js';
import Header from './components/Header/Header.jsx'
import CreateCourse from './routes/createCourse/CreateCourse.jsx';

<<<<<<< HEAD


=======
>>>>>>> master
// App component - represents the whole app
export default class App extends Component {


  render() {
    let course = {
      title: "3D-modellering och siktanalys",
      hp: "7.5 hp",
      level: "Avancerad",
      period:"fall",
      info: "information",
      text:"Comments",

    };
    return (
      <div className="container">
        <Header/>
        {this.props.children}
      </div>

    );
  }
}
//<li><Link to="/create">Create stuff</Link></li>
//<li><a href="/overview" class="active">Test</a></li>
