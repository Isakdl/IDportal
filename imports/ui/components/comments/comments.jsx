import React, { Component, PropTypes } from 'react';
import './style.css';

import Comment from './comment.jsx';


export default class Comments extends Component {
  rendercomment() {
    if(!this.props.comments){
      return null;
    }
    {this.getNestedComments(this.props.comments)}
  }

  getNestedComments(comments){
    return comments.map((comment) => (
      <div className="nestedCommentWrapper">
        <Comment key={comment._id} comment={comment} />
        <div className="nestedComment">
          {this.getNestedComment(comment.replies)}
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className ="commentsContainer">
         <h2>comments</h2>
			   <p>
            {this.rendercomment()}
         </p>
      </div>

    );
  }
}

Comments.propTypes = {
  //comments: PropTypes.array.isRequired,
};
