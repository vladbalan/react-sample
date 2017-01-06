import React from 'react';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Space from '../pages/Space.jsx';

function composer(props, onData) {
  const test = 123;

  onData(null, { test });
}

export default composeWithTracker(composer)(Space);
