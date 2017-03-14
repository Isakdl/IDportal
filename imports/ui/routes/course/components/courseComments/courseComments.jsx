import React, { Component, PropTypes } from 'react';
import './style.css';

import Comments from '/imports/ui/components/comments/comments.jsx'

import {Meteor} from 'meteor/meteor'
import constants from '/imports/constants/apiConstants'


export default class CourseComments extends Component {

  componentWillMount()
  {
    this.state =
    {
      course          : this.props.course,
      comment         : '',
      isCommentsValid : true,
    }
  }


  isValidMinLength(length, s, sId) {

    (s.length >= length) ? this.setState({[sId] : true})
                          : this.setState({[sId] : false})
  }


  handleSubmit(event)
  {
    ts = this.state

    if (ts.isCommentValid) {
      Meteor.call(constants.REVIEWS_INSERT, ts.comment, ts.course._id);
    }
  }

  render() {
    return (
      <div className="commentSection">

        <form className="new-comment" >
          <font color={this.state.isCommentValid ? "black" : "red"}>
            Write a review:
          </font>
          <input className="courseInput" type="text" name="title"
            onChange={(e) => this.setState({comment:e.target.value})}
            onBlur={(e) => this.isValidMinLength (5, this.state.comment
                                                  ,"isCommentValid")}
            style={{borderColor:this.state.isCommentValid ? "gray" : "red"}}
            placeholder="Comment" />
          <input type="button" onClick={(e) => this.handleSubmit(e)}
            value="Submit"/>
        </form>
        <Comments comments={this.props.comments}/>
      </div>

    );
  }
}

CourseComments.propTypes = {
  comments : PropTypes.array.isRequired,
  course   : PropTypes.object.isRequired,
};
