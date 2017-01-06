import React from 'react';
import Bridge from '../components/Bridge.jsx';
import Communication from '../components/Communication.jsx';
import Footer from '../components/Footer.jsx';

export default class Space extends React.Component {
  render() {
    return (
      <div>
        <Bridge />
        <Communication />
        <Footer />
      </div>
    );
  }
}

Space.propTypes = {
  tweets: React.PropTypes.array,
  stars: React.PropTypes.array,
};
