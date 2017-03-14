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
      text: this.props.comment.text,
      isEditing: false,
    };
  }

  render() {
    return (
      <div className="commentReplyWrapper">
        <div className="comment">

          <div className="commentWrapper">
            <div className="commentContainer">
              <div className="commentTextBox">
                {this.getTextField()}
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

  getTextField(){
    if(this.state.isEditing){
      return (
        <input className="editComment" type="text"
          onChange={(e) => this.setState({text:e.target.value})}
          value={this.state.text}
          placeholder="Comment" />
      );
    } else {
      return <p className="commentText">{this.state.text}</p>
    }
  }

  getUserButtons(){
    if(Meteor.user() && Meteor.user()._id == this.props.comment.userId){
      return (
        <div className="commentUserButtons">
          {this.getReplyButton()}
          {this.getEditButton()}
          <button onClick={(proxy) => {proxy.stopPropagation(); this.deleteComment()}}>Delete</button>
        </div>
      );
    }
    return null;
  }

  getEditButton(){
    if(this.state.isEditing){
      return <button onClick={(proxy) => {proxy.stopPropagation(); this.sendEditComment(this.state.text)}}>Save</button>
    } else {
      return <button onClick={(proxy) => {proxy.stopPropagation(); this.editComment()}}>Edit</button>
    }
  }

  getReplyButton(){
    if(this.props.comment.parentId === null){
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
    Meteor.call(constants.REVIEWS_UPVOTE, this.props.comment._id, this.props.comment.parentId);
  }

  downvote(){
    Meteor.call(constants.REVIEWS_DOWNVOTE, this.props.comment._id, this.props.comment.parentId);
  }

  deleteComment(){
    Meteor.call(constants.REVIEWS_REMOVE, this.props.comment._id, this.props.comment.parentId);
  }

  editComment(){
    this.setState({
      isEditing: true,
    });
  }

  sendEditComment(text){
    this.setState({
      isEditing: false,
    });
    Meteor.call(constants.REVIEWS_EDIT, this.props.comment._id, this.props.comment.parentId, text);
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
