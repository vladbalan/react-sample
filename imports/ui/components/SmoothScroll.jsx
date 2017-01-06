import React from 'react';

export default class SmoothScroll extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const target = e.currentTarget.hash;

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top,
    }, 800, 'swing', () => {
      window.location.hash = target;
    });
  }

  render() {
    return (
      <a className="smoothscroll" onClick={this.handleClick} {...this.props}>
        {this.props.children}
      </a>
    );
  }
}

SmoothScroll.propTypes = {
  href: React.PropTypes.string,
  title: React.PropTypes.string,
};
