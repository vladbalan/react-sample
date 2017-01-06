import React from 'react';
import { CONTACT_FORM_FIELDS } from '/imports/util/constants';
import { validate } from '/imports/util/validator';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  displayError(error) {
    $('#image-loader').hide();
    $('.submit').fadeIn();
    $('#message-warning').html(error);
    $('#message-warning').fadeIn();
  }

  displaySuccess() {
    $('#image-loader').hide();
    // $('#message-warning').hide();
    $('form').hide();
    $('#message-success').fadeIn();
    $('html, body').stop().animate({
      scrollTop: $('#message-success').offset().top,
    }, 800, 'swing');
  }

  handleSubmit(e) {
    e.preventDefault();
    const comp = this;
    const doc = {};
    // Form values
    _.each(CONTACT_FORM_FIELDS, (field) => {
      const ref = field.attributes.ref;
      doc[ref] = comp.refs[ref].value.trim();
    });

    const errors = validate(doc);

    $('.submit').hide();
    $('#image-loader').fadeIn();

    if (errors.length) {
      this.displayError(errors.join('<br />'));
      return false;
    }

    $('#message-warning').hide();

    Meteor.call('sendMessage', doc, (error, result) => {
      if (error) {
        this.displayError(`${error.reason} (${error.error})`);
      } else {
        if (result.status === 'ok') {
          this.displaySuccess();
        } else {
          this.displayError(result.errors.join('<br>'));
        }
      }
    });

    return true;
  }

  renderFields() {
    return CONTACT_FORM_FIELDS.map((field) => {
      const required = field.required ? <span className="required">*</span> : '';
      const input = (field.element === 'input') ?
        <input {...field.attributes} /> :
        <textarea {...field.attributes}></textarea>;

      return (
        <div key={field.attributes.id}>
          <label htmlFor={field.attributes.id}>{field.label} {required}</label>
          {input}
        </div>
      );
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          {this.renderFields()}

          <div className="submit-container">
            <button className="submit">Submit</button>
            <span id="image-loader">
              <img src="images/loader.gif" />
            </span>
          </div>
        </fieldset>
      </form>
    );
  }
}
