
import React, { Component, PropTypes } from 'react';
import './style.css';

import Comments from '/imports/ui/components/comments/comments.jsx'
import WriteComment from '/imports/ui/components/comments/writeComment.jsx';

import {Meteor} from 'meteor/meteor'
import constants from '/imports/constants/apiConstants'


export default class CourseComments extends Component {

  componentWillMount()
  {
    this.state =
    {
      comment         : '',
      isCommentValid : true,
    }
  }


  isValidMinLength(length, s, sId) {

    (s.length >= length) ? this.setState({[sId] : true})
                          : this.setState({[sId] : false})
  }


  handleSubmit(event)
  {
    if (this.state.isCommentValid) {
      this.props.sendCommentCallback(this.state.comment);
    }
  }

  render() {
    return (
      <div className="writeCommentWrapper">
        <form className="new-comment" >
          <font color={this.state.isCommentValid ? "black" : "red"}>
            Write a review:
          </font>
          <input className="commentInput" type="text" name="title"
            onChange={(e) => this.setState({comment:e.target.value})}
            onBlur={(e) => this.isValidMinLength (5, this.state.comment
                                                  ,"isCommentValid")}
            style={{borderColor:this.state.isCommentValid ? "gray" : "red"}}
            placeholder="Comment" />
          <input type="button" onClick={(e) => this.handleSubmit(e)}
            value="Submit"/>
        </form>
      </div>

    );
  }
}

CourseComments.propTypes = {
  sendCommentCallback : PropTypes.func.isRequired,
};
