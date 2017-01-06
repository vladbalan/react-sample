import React from 'react';

export default class Glyph extends React.Component {
  render() {
    const text = `&#${this.props.code};`;
    const glyph = $('<span/>').html(text).text();

    return (
      <span className="glyph">{glyph}</span>
    );
  }
}

Glyph.propTypes = {
  code: React.PropTypes.number,
};
