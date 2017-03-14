import React, { Component, PropTypes } from 'react';
import './style.css';

import Comment from './comment.jsx';


export default class Comments extends Component {
  rendercomment() {
    if(!this.props.comments){
      return null;
    }
    return this.getNestedComments(this.props.comments);
  }

  getNestedComments(comments){

    if(comments.length == 0){
      return null;
    }

    return comments.map((comment) => (
      <div key={comment._id} className="nestedCommentWrapper">
        <Comment comment={comment} />
        <div key={comment._id}className="nestedComment">
          {this.getNestedComments(comment.replies)}
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className ="commentsContainer">
         <h2>comments</h2>
			   <div>
            {this.rendercomment()}
         </div>
      </div>

    );
  }
}

Comments.propTypes = {
  //comments: PropTypes.array.isRequired,
};
