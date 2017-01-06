import React from 'react';
import moment from 'moment';
import SmoothScroll from './SmoothScroll.jsx';
import Social from './Social.jsx';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <Social className="social-links" />

            <ul className="copyright">
              <li>&copy; Copyright {moment().format('YYYY')} Vlad Balan</li>
              <li>Space Magic</li>
            </ul>
          </div>
          <div id="go-top"><SmoothScroll title="Beam me up!" href="#bridge"><i className="icon-up-open"></i></SmoothScroll></div>
        </div>
      </footer>
    );
  }
}
