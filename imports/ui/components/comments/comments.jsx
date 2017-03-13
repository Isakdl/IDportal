import React, { Component, PropTypes } from 'react';
import './style.css';

export default class Comments extends Component {
  rendercomment() {
    return this.props.comments.map((comment) => (
      <comment key={comment._id} comment={comment} />
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
  comments: PropTypes.array.isRequired,

};
