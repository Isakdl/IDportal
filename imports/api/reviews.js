import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import moment from 'moment';

export const Reviews = new Mongo.Collection('reviews');


Meteor.methods({
  'reviews.add'(text, reviewId){
    console.log("reviews.add was called");
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    let user = Meteor.user();
    Reviews.insert(createReviewObject(user, reviewId, text, false));

  },
  'reviews.remove'(reviewId){



    let review = Reviews.find(reviewId).fetch();

    if(review == null || review.length > 1 || review.length == 0){
      throw new Meteor.Error('invalid review ID');
    }

    if(!this.userId || !(this.userId === review[0].userId)){
      throw new Meteor.Error('not-authorized');
    }


    Reviews.remove(reviewId);
  },
  'reviews.edit'(reviewId, text){

    let review = Reviews.find(reviewId).fetch();
    let user = Meteor.user();



    if(!this.userId || !(this.userId === review.userId)){
      throw new Meteor.Error('not-authorized');
    }

    Reviews.update({_id: reviewId}, {$set:
                                      {
                                        "text": text,
                                        "edited": true,
                                        "timestamp": moment().format(),
                                       }
                                     });
  },
  'reviews.reply'(){

  },
  'reviews.upvote'(reviewId){
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    
    vote(reviewId, 1);
  },
  'reviews.downvote'(reviewId){
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }

    vote(reviewId, -1);
  },
});



const vote = (reviewId, voteChange) => {

  //Make sure a vote cannot change more than -1 or +1
  if(!(voteChange === 1 || voteChange === -1)){
    throw new Meteor.Error('invalid vote type');
  }

  let review = Reviews.find(reviewId).fetch();

  if(review == null || review.length > 1){
    throw new Meteor.Error('invalid review ID');
  }

  let reviewVotes = Meteor.user().profile.reviewVotes;
  let voteIndex = reviewVotes.findIndex(obj => obj.reviewId == reviewId);


  if(voteIndex === -1){
    reviewVotes.push({
      reviewId,
      vote: voteChange,
    });
  } else {

    if(reviewVotes[voteIndex].vote === voteChange){
      reviewVotes[voteIndex].vote = 0;
      voteChange = -voteChange;
    } else if(reviewVotes[voteIndex].vote === 0) {
      reviewVotes[voteIndex].vote = voteChange;
    } else {
      reviewVotes[voteIndex].vote = voteChange;
      voteChange = voteChange + voteChange;
    }
  }

  Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.reviewVotes": reviewVotes}});

  Reviews.update(reviewId, {$set: {score: review[0].score + voteChange}});
}

const createReviewObject = (user, courseId, text, edited) => {
  console.log("insert review with userId: ");
  console.log(user._id);

  return {
    userId: user._id,
    username: user.username,
    courseId,
    text,
    edited,
    timestamp: moment().format(),
    score: 0,
    replies: [],
  };
}
