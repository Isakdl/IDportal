import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const Reviews = new Mongo.Collection('reviews');


Meteor.methods({
  'reviews.add'(){

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
