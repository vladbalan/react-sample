import React from 'react';
import Glyph from './Glyph.jsx';
import SmoothScroll from './SmoothScroll.jsx';
import Social from './Social.jsx';
import { GLYPH_CODES } from '/imports/util/constants.js';

export default class Bridge extends React.Component {
  componentWillMount() {
    $('html').css({ position: 'absolute' });
    $('body').css({ overflow: 'visible' });
  }

  componentDidMount() {
    /*----------------------------------------------------*/
    /* Variable definitions
    ------------------------------------------------------ */

    const sections = $('section');
    const navigationLinks = $('#nav-show a');

    /*----------------------------------------------------*/
    /* FitText Settings
    ------------------------------------------------------ */

    Meteor.setTimeout(() => {
      $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
    }, 100);


    /*----------------------------------------------------*/
    /* Highlight the current section in the navigation bar
    ------------------------------------------------------*/

    sections.waypoint({
      handler(event, direction) {
        let activeSection = $(this);
        let activeLink = null;
        if (direction === 'up') {
          activeSection = activeSection.prev();
        }
        activeLink = $(`#nav-show a[href="#${activeSection.attr('id')}"]`);
        navigationLinks.parent().removeClass('current');
        activeLink.parent().addClass('current');
      },
      offset: '35%',
    });


    /*----------------------------------------------------*/
    /*  Make sure that #header-background-image height is
    /* equal to the browser height.
    ------------------------------------------------------ */

    $('header').css({ height: $(window).height() });
    $(window).on('resize', () => {
      $('header').css({ height: $(window).height() });
      $('body').css({ width: $(window).width() });
    });


    /*----------------------------------------------------*/
    /*  Fade In/Out Primary Navigation
    ------------------------------------------------------*/

    $(window).on('scroll', () => {
      const h = $('header').height();
      const y = $(window).scrollTop();
      const nav = $('#nav-show');

      if ((y > h * 0.20) && (y < h) && ($(window).outerWidth() > 768)) {
        nav.fadeOut('fast');
      } else {
        if (y < h * 0.20) {
          nav.removeClass('opaque').fadeIn('fast');
        } else {
          nav.addClass('opaque').fadeIn('fast');
        }
      }
    });
  }

  render() {
    const glyph = <Glyph code={_.sample(GLYPH_CODES)} />;

    return (
      <header id="bridge">
        <nav id="nav-show">
          <a className="mobile-btn" href="#nav-show" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#nav-hide" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li className="current"><SmoothScroll href="#bridge">Bridge</SmoothScroll></li>
            <li><SmoothScroll href="#communication">Communication</SmoothScroll></li>
          </ul>
        </nav>

        <div className="row banner">
         <div className="banner-text">
          <h1 className="responsive-headline"><span className="shade">vlad</span>balan</h1>
          <h3>{glyph} space<a href="/magic"><span className="shade">/magic</span></a> {glyph}</h3>
          <hr />
          <Social className="social" />
         </div>
        </div>
      </header>
    );
  }
}

Bridge.propTypes = {
  handleSmoothScroll: React.PropTypes.func,
};
