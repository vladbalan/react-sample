import React from 'react';
import { URLS } from '/imports/util/constants.js';
import { since } from '/imports/util/helpers.js';

export default class Tweet extends React.Component {
  tweetUrl(idStr) {
    return `${URLS.twitter}/status/${idStr}`;
  }

  render() {
    const { tweet } = this.props;

    return (
      <li>
        <span>
          {tweet.text}
          <a href={this.tweetUrl(tweet.id_str)} target="_blank" title={this.tweetUrl(tweet.id_str)}>&#10150;</a>
        </span>
        <b><a href={this.tweetUrl(tweet.id_str)} target="_blank" title={this.tweetUrl(tweet.id_str)}>{since(tweet.created_at)}</a></b>
      </li>
    );
  }
}

Tweet.propTypes = {
  tweet: React.PropTypes.object,
};
