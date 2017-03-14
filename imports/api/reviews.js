import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import moment from 'moment';

export const Reviews = new Mongo.Collection('reviews');


Meteor.methods({
  'reviews.add'(text, courseId){
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    let user = Meteor.user();
    Reviews.insert(createReviewObject(user, courseId, text, false, null));

  },
  'reviews.remove'(reviewId, parentId){

    let review = getReview(reviewId, parentId);
    let user = Meteor.user();

    if((!this.userId || !(this.userId === review.userId)) && !user.profile.admin){
      throw new Meteor.Error('not-authorized');
    }


    Reviews.remove(reviewId);
  },
  'reviews.edit'(reviewId, parentId, text){

    let review = getReview(reviewId, parentId); //Reviews.find(reviewId).fetch();

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
  'reviews.reply'(parentReviewId, text){

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }


    let parentReview = Reviews.find(parentReviewId).fetch();

    if(parentReview == null || parentReview.length > 1 || parentReview.length == 0){
      throw new Meteor.Error('invalid review ID');
    }

    let comment = createReviewObject(Meteor.user(), parentReview.courseId, text, false, parentReviewId);
    comment._id = (new Meteor.Collection.ObjectID())._str;
    let replies = parentReview[0].replies;
    replies.push(comment);

    Reviews.update({_id: parentReviewId}, {$set:
                                      {
                                          "replies": replies,
                                      }
                                    });
  },
  'reviews.upvote'(reviewId, parentId){
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }

    vote(reviewId, parentId, 1);
  },
  'reviews.downvote'(reviewId, parentId){
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }

    vote(reviewId, parentId, -1);
  },
});

const getReview = (reviewId, parentId) => {
  let review = null;
  if(parentId === null){
    review = Reviews.find(reviewId).fetch();
  } else {
    review = Reviews.find(parentId).fetch();
  }

  if(review == null || review.length > 1 || review.length == 0){
    throw new Meteor.Error('invalid review ID');
  }

  if(parentId === null){
    return review[0];
  } else {
    return review[0].replies.find(x => x._id === reviewId)
  }

}


const vote = (reviewId, parentId, voteChange) => {

  //Make sure a vote cannot change more than -1 or +1
  if(!(voteChange === 1 || voteChange === -1)){
    throw new Meteor.Error('invalid vote type');
  }

  let review = getReview(reviewId, parentId);
  //let review = Reviews.find(reviewId).fetch();

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

  Reviews.update(reviewId, {$set: {score: review.score + voteChange}});
}

const createReviewObject = (user, courseId, text, edited, parentId) => {
  return {
    userId: user._id,
    username: user.username,
    courseId,
    text,
    edited,
    parentId,
    timestamp: moment().format(),
    score: 0,
    replies: [],
  };
}
