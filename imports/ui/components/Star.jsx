import React from 'react';
import { since } from '/imports/util/helpers.js';

export default class Star extends React.Component {
  render() {
    const { star } = this.props;

    return (
      <li>
        <span>
          {star.description}
          <a href={star.html_url} target="_blank" title={star.html_url}>&#10150;</a>
        </span>
        <b><a href={star.html_url} target="_blank" title={star.html_url}>{star.full_name}</a></b>
      </li>
    );
  }
}

Star.propTypes = {
  star: React.PropTypes.object,
};
