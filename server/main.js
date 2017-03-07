import { Meteor } from 'meteor/meteor';
import { AccountsServer } from 'meteor/accounts-base';
import '../imports/api/courses.js';

Meteor.startup(() => {
  Accounts.onCreateUser(function(options, user) {
    if (options.profile){
      user.profile = options.profile;
    }

    if(!user.profile){
      user.profile = {};
    }

    user.profile.admin = false;

    return user;
  });
});
