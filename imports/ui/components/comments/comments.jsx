import React, { Component, PropTypes } from 'react';
import './style.css';

export default class Comments extends Component {
  render() {
    return (
      <div className ="Comment">
         <h2>comments</h2>
			   <p>{this.props.comments}</p>
      </div>

    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,

};
