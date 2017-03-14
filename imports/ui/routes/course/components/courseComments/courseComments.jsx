import React, { Component, PropTypes } from 'react';
import './style.css';

import Comments from '/imports/ui/components/comments/comments.jsx'
import WriteComment from '/imports/ui/components/comments/writeComment.jsx';

import {Meteor} from 'meteor/meteor'
import constants from '/imports/constants/apiConstants'


export default class CourseComments extends Component {

  componentWillMount() {
    this.state = {
      course          : this.props.course,
    }
  }


  handleComment(text) {
    Meteor.call(constants.REVIEWS_INSERT, text, this.state.course._id);
  }

  render() {
    return (
      <div className="commentSection">
        {this.getWriteComments()}
        <Comments comments={this.props.comments}/>
      </div>
    );
  }

  getWriteComments(){
    if(Meteor.user()){
      return <WriteComment sendCommentCallback={this.handleComment.bind(this)}/>
    }
    return null;
  }

}

CourseComments.propTypes = {
  comments : PropTypes.array.isRequired,
  course   : PropTypes.object.isRequired,
};
