import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import constants from '/imports/constants/apiConstants';
import WriteComment from './writeComment.jsx';

import './style.css';
export default class Comment extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isReplyActive: false,
    };
  }

  render() {
    return (
      <div className="commentReplyWrapper">
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
        {this.getReplyForm()}
      </div>
    );
  }

  getUserButtons(){
    if(Meteor.user() && Meteor.user()._id == this.props.comment.userId){
      return (
        <div className="commentUserButtons">
          {this.getReplyButton()}
          <button onClick={(proxy) => {proxy.stopPropagation(); this.editComment()}}>Edit</button>
          <button onClick={(proxy) => {proxy.stopPropagation(); this.deleteComment()}}>Delete</button>
        </div>
      );
    }

    return null;
  }

  getReplyButton(){
    if(!this.props.comment.reply){
      return <button onClick={(proxy) => {proxy.stopPropagation(); this.replyComment()}}>Reply</button>
    }
    return null;
  }

  getReplyForm(){
    if(this.state.isReplyActive){
      return (
        <div className="replyContainer">
          <WriteComment sendCommentCallback={this.sendReplyComment.bind(this)}/>
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

  deleteComment(){
    Meteor.call(constants.REVIEWS_REMOVE, this.props.comment._id);
  }

  editComment(){

  }

  replyComment(){
    this.setState({
      isReplyActive: true,
    });
  }

  sendReplyComment(text){
    this.setState({
      isReplyActive: false,
    });
    Meteor.call(constants.REVIEWS_REPLY, this.props.comment._id, text);
  }

}

Comment.propTypes = {
  //comment: PropTypes.object.isRequired,
};
