import React, { Component, PropTypes } from 'react';
export default class Comment extends Component {
  render() {
    return (
      <div className ="Comment">
         <h2>comment</h2>
			   <p>{this.props.commment.text}</p>
			   <p>{this.props.commment.user}</p>
			   <p>{this.props.commment.vote}</p>
			   

      </div>

    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};