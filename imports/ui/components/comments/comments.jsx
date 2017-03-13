import React, { Component, PropTypes } from 'react';
import './style.css';

import Comment from './comment.jsx';


export default class Comments extends Component {
  rendercomment() {
    if(!this.props.comments){
      return null;
    }
    return this.props.comments.map((comment) => (
      <Comment key={comment._id} comment={comment} />
    ));

  }
  render() {
    return (
      <div className ="Comment">
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
