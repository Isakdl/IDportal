import React, { Component, PropTypes } from 'react';
export default class CommentSection extends Component {
  render() {
    return (
      <div className ="Comment">
         <h2>comments</h2>
			   <p>{this.props.text}</p>
      </div>

    );
  }
}

CommentSection.propTypes = {
  text: PropTypes.string.isRequired,
 
};