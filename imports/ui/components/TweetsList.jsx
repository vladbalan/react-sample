import React from 'react';
import Tweet from './Tweet.jsx';

export default class TweetsList extends React.Component {
  renderTweets() {
    return this.props.tweets.map((tweet) => (
      <Tweet key={tweet.id_str} tweet={tweet} />
    ));
  }

  render() {
    return (
      <ul>
        {this.renderTweets()}
      </ul>
    );
  }
}

TweetsList.propTypes = {
  tweets: React.PropTypes.array,
};
