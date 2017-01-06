import React from 'react';
import ContactForm from './ContactForm.jsx';
import StarsListContainer from '../containers/StarsListContainer.jsx';
import TweetsListContainer from '../containers/TweetsListContainer.jsx';

export default class Communication extends React.Component {
  render() {
    return (
      <section id="communication">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>

          <div className="ten columns">
            <p className="lead">
            Welcome to Space Magic, my humble space ship! She is currently on an epic journey of self discovery and is honored to have you witness her slowly take shape. If you like what you're seeing so far and are interested in collaborating with her creator, or if you just want to chat, feel free to use this form. All feedback is encouraged!
            </p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <ContactForm />

            <div id="message-warning">Please try again!</div>

            <div id="message-success">
              <i className="fa fa-check"></i>Thank you! Expect a reply by tomorrow!<br />
            </div>
          </div>


          <aside className="four columns footer-widgets">
            <div className="widget">
              <h4 className="widget-title" title="A small sample from my favorite repositories">Handful of stars</h4>

              <ul id="github" className="feed">
                <StarsListContainer />
              </ul>
            </div>

            <div className="widget">
              <h4 className="widget-title" title="I have a poetic license, officer!">Echoes in space</h4>

              <ul id="twitter" className="feed">
                <TweetsListContainer />
              </ul>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
