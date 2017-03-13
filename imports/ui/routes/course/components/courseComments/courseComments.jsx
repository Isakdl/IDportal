import React, { Component, PropTypes } from 'react';
import './style.css';
import {Comments} from '/imports/ui/components/comments/comments.jsx'
import {Comment} from '/imports/ui/components/comments/comment.jsx'

export default class CourseComments extends Component {
  render() {
    return (
      <div className="commentSection">
        <Comments comments={this.props.comments}/>
      </div>

    );
  }
}

CourseComments.propTypes = {
  comments : propType.array.required,
};
