import React, { Component, PropTypes } from 'react';
import './style.css';

export default class Comment extends Component {
  render() {
    return (
      <div className ="Comment">
        <p>{this.props.comment.text}</p>
        <p>{this.props.comment.username}</p>
        <p>{this.props.comment.score}</p>



      </div>

    );
  }
}

Comment.propTypes = {
  //comment: PropTypes.object.isRequired,
};
