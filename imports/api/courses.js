import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const Courses = new Mongo.Collection('courses');


Meteor.methods({
  'courses.insert'(title) {
    check(title, String);

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Courses.insert({
      title,
    });
  },
  'courses.remove'(courseId) {
    check(courseId, String);

    if(!this.userId || !Meteor.user().profile.admin){
      throw new Meteor.Error('not-authorized');
    }

    Courses.remove(courseId);
  },

});
