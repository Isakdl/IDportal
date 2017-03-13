import React, { Component, PropTypes } from 'react';
import './style.css';
import {Comments} from '/imports/ui/components/comments/comments.jsx'
import {Comment} from '/imports/ui/components/comments/comment.jsx'
import {Meteor} from 'meteor/meteor'
import {Constants} from '/imports/constants/apiConstants'

export default class CourseComments extends Component {

  componentWillMount()
  {
    this.state =
    {
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

    if (ts.isCommentValid)
    {
    Meteor.call(Constants.REVIEW_INSERT, ts.comment);
    }
  }

  render() {
    return (
      <div className="commentSection">
        
        <form className="new-comment" >
          <font color={this.state.isCommentValid ? "black" : "red"}>
            Course Title:
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
};
