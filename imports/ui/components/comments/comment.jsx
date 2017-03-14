import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import constants from '/imports/constants/apiConstants';
import './style.css';
export default class Comment extends Component {


  render() {
    return (
      <div className="comment">

        <div className="commentWrapper">
          <div className="commentContainer">
            <div className="commentTextBox">
              <p className="commentText">{this.props.comment.text}</p>
            </div>
            <div className="commentUsernameBox">
              <p className="commentUsername">Written by: {this.props.comment.username} at {this.props.comment.timestamp}</p>
            </div>      
          </div>
          <div className="commentScoreBox">
            <button onClick={(proxy) => {proxy.stopPropagation(); this.upvote()}}>UP</button>
            {this.props.comment.score}
            <button onClick={(proxy) => {proxy.stopPropagation(); this.downvote()}}>DOWN</button>
          </div>

        </div>
        {this.getUserButtons()}
      </div>
    );
  }

  getUserButtons(){
    if(Meteor.user() && Meteor.user()._id == this.props.comment.userId){
      return (
        <div className="courseAdminButtonContainer">
          <button onClick={(proxy) => {proxy.stopPropagation(); this.editCourse()}}>Edit</button>
          <button onClick={(proxy) => {proxy.stopPropagation(); this.deleteCourse()}}>Delete</button>
        </div>
      );
    }

    return null;
  }

  upvote(){
    Meteor.call(constants.REVIEWS_UPVOTE, this.props.comment._id);
  }

  downvote(){
    Meteor.call(constants.REVIEWS_DOWNVOTE, this.props.comment._id);
  }

  deleteCourse(){
    Meteor.call(constants.REVIEWS_REMOVE, this.props.comment._id);
  }

  editCourse(){

  }

}

Comment.propTypes = {
  //comment: PropTypes.object.isRequired,
};
