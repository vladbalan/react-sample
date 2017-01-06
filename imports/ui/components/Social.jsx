import React from 'react';
import { URLS } from '/imports/util/constants.js';

export default class Social extends React.Component {
  render() {
    return (
      <ul className={this.props.className}>
        <li><a href={URLS.github} target="_blank" title="@vladbalan"><i className="fa fa-github"></i></a></li>
        <li><a href={URLS.twitter} target="_blank" title="@VladBalanSpace"><i className="fa fa-twitter"></i></a></li>
      </ul>
    );
  }
}
