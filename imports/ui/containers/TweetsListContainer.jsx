import React from 'react';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import TweetsList from '../components/TweetsList.jsx';

function composer(props, onData) {
  Meteor.call('getTweets', 2, (error, tweets) => {
    if (error) {
      console.error(error);
    } else {
      onData(null, { tweets });
    }
  });
}

export default composeWithTracker(composer)(TweetsList);
