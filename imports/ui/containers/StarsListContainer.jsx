import React from 'react';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import StarsList from '../components/StarsList.jsx';

function composer(props, onData) {
  Meteor.call('getStars', 3, (error, stars) => {
    if (error) {
      console.error(error);
    } else {
      onData(null, { stars });
    }
  });
}

export default composeWithTracker(composer)(StarsList);
