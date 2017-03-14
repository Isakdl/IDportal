import { Meteor } from 'meteor/meteor';
import { AccountsServer } from 'meteor/accounts-base';
import '../imports/api/reviews.js';
import '../imports/api/courses.js';


Meteor.startup(() => {
  Accounts.onCreateUser(function(options, user) {
    if (options.profile){
      user.profile = options.profile;
    }

    if(!user.profile){
      user.profile = {};
    }

    user.profile.admin = true;
    user.profile.courseVotes = [];
    user.profile.reviewVotes = [];

    return user;
  });
});
