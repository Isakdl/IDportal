import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Courses = new Mongo.Collection('courses');


Meteor.methods({
  'courses.insert'(title) {
    check(title, String);
    // Make sure the user is logged in before inserting a task

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Courses.insert({
      title,
    });
  },
  'courses.remove'(courseId) {
    check(courseId, String);
    Tasks.remove(courseId);
  },
  'courses.setChecked'(courseId, setChecked) {

    check(courseId, String);
    check(setChecked, Boolean);

    Tasks.update(courseId, { $set: { checked: setChecked } });
  },
  
});
