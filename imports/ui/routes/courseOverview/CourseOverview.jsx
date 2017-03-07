import React, { Component, PropTypes } from 'react';
import './style.css';

import { createContainer } from 'meteor/react-meteor-data';

import ReactDOM from "react-dom";
import { Meteor } from 'meteor/meteor';
import { Courses } from '../../../api/courses.js';

import SearchInput, {createFilter} from 'react-search-input'
import CourseList from './components/courseList/courseList.jsx';

const KEYS_TO_FILTERS = ['title']

// Task component - represents a single todo item
export class CourseOverview extends Component {
  constructor (props) {
    super(props);
    //this.setState = this.setState.bind(this);
    this.state = { searchTerm: '' };
  }

  render() {
    const filteredSearch = this.props.courses.filter (
        createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    return (
        <div className="container">
          <SearchInput className="search-input"
            onChange={this.searchUpdated.bind(this)} />
          <CourseList courses={filteredSearch}/>
        </div>
    );
  }

  searchUpdated (term) {
    this.setState({searchTerm: term});
  }
}

CourseOverview.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    courses: Courses.find({}).fetch(),
  };
}, CourseOverview);
