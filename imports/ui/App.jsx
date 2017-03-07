import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Courses } from '../api/courses.js';
import Course from './components/course/course.jsx';
import Header from './components/Header/Header.jsx'
import CreateCourse from './routes/createCourse/CreateCourse.jsx';



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
        <Course course={course} />
        {this.props.children}
      </div>

    );
  }
}
//<li><Link to="/create">Create stuff</Link></li>
//<li><a href="/overview" class="active">Test</a></li>
