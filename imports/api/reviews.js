import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const Reviews = new Mongo.Collection('reviews');


Meteor.methods({
  'reviews.add'(text){

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Reviews.insert({
      userId: "",
      username: "",
      courseId: "",
      text,
      timestamp: "",
      score: 0,
    });

  },
  'reviews.remove'(){

  },
  'reviews.edit'(){

  },
  'reviews.reply'(){

  },
  'reviews.upvote'(){

  },
  'reviews.downvote'(){

  }
});
