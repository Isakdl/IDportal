import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import apiConstants from '/imports/constants/apiConstants';

export const Courses = new Mongo.Collection('courses');

Meteor.methods({
  'courses.edit'(courseId, title, ects, speed, description, url, level, period) {
    check(title, String);

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    let course = Courses.find(courseId).fetch();

    if(course == null){
      throw new Meteor.Error('invalid course ID');
    }

    Courses.update(
      {_id : courseId},
      {$set: {        
        "title" : title,
        "ects" : ects,
        "speed" : speed,
        "description" : description,
        "url" : url,
        "level" : level,
        "period" : period
        }
      }
    );
  },
  'courses.insert'(title, ects, speed, description, url, level, period) {
    check(title, String);

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Courses.insert({
      title,
      ects,
      speed,
      description,
      url,
      level,
      period,
      score: 0,
    });
  },
  'courses.remove'(courseId) {
    check(courseId, String);

    if(!this.userId || !Meteor.user().profile.admin){
      throw new Meteor.Error('not-authorized');
    }

    Courses.remove(courseId);
  },
  'courses.upvote'(courseId) {
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    vote(courseId, 1);
  },
  'courses.downvote'(courseId) {
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    vote(courseId, -1);
  },

});


const vote = (courseId, voteChange) => {

  //Make sure a vote cannot change more than -1 or +1
  if(!(voteChange === 1 || voteChange === -1)){
    throw new Meteor.Error('invalid vote type');
  }

  let course = Courses.find(courseId).fetch();

  if(course == null || course.length > 1){
    throw new Meteor.Error('invalid course ID');
  }

  let courseVotes = Meteor.user().profile.courseVotes;
  let voteIndex = courseVotes.findIndex(obj => obj.courseId == courseId);


  if(voteIndex === -1){
    courseVotes.push({
      courseId,
      vote: voteChange,
    });
  } else {

    if(courseVotes[voteIndex].vote === voteChange){
      courseVotes[voteIndex].vote = 0;
      voteChange = -voteChange;
    } else if(courseVotes[voteIndex].vote === 0) {
      courseVotes[voteIndex].vote = voteChange;
    } else {
      courseVotes[voteIndex].vote = voteChange;
      voteChange = voteChange + voteChange;
    }
  }

  Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.courseVotes": courseVotes}});

  Courses.update(courseId, {$set: {score: course[0].score + voteChange}});
}
