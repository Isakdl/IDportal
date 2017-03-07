import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const Courses = new Mongo.Collection('courses');

Meteor.methods({
  'courses.insert'(title, ects, speed, description, url, period) {
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

    let course = Courses.find(courseId).fetch();

    if(course == null || course.length > 1){
      throw new Meteor.Error('invalid course ID');
    }

    Courses.update(courseId, {$set: {score: course[0].score + 1}});

  },
  'courses.downvote'(courseId) {
    let course = Courses.find(courseId).fetch();

    if(course == null || course.length > 1){
      throw new Meteor.Error('invalid course ID');
    }
    
    Courses.update(courseId, {$set: {score: course[0].score - 1}});
  }

});
