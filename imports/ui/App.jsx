import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Courses } from '../api/courses.js';

import CourseList from './components/courseList/courseList.jsx';
import CreateCourse from './routes/createCourse/CreateCourse.jsx';

// App component - represents the whole app
class App extends Component {

  render() {
    return (
      <div className="container">
        <header>
          <h1>Kursportalen för ID</h1>
        </header>


        <CreateCourse/>
        <AccountsUIWrapper />

        <CourseList courses={this.props.courses}/>
      </div>
    );
  }
}

App.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    courses: Courses.find({}).fetch(),
  };
}, App);
