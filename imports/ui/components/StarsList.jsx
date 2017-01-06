import React from 'react';
import Star from './Star.jsx';

export default class StarsList extends React.Component {
  renderStars() {
    return this.props.stars.map((star) => (
      <Star key={star.id} star={star} />
    ));
  }

  render() {
    return (
      <ul>
        {this.renderStars()}
      </ul>
    );
  }
}

StarsList.propTypes = {
  stars: React.PropTypes.array,
};
