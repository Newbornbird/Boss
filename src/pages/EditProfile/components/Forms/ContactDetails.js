import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import FormFieldText from './FormFieldText';

class ContactDetails extends Component {
  onSubmit = values => {
    console.log(values);
  };

  required = value => (value ? undefined : 'Required');

  render() {
    return (
      <article
        className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible"
        data-chapter="contact"
      >
        <header className="boss-content-switcher__header">
          <h2 className="boss-content-switcher__title">Contact Details</h2>
        </header>
        <div className="boss-content-switcher__content">
          {/* <!-- Common form start --> */}
          <Form
            onSubmit={this.onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} action="#" className="boss-form boss-form_page_profile-edit">
                <Field
                  labelText="Email"
                  name="email"
                  type="email"
                  className="boss-form__input boss-form__input_state_error"
                  alertTextIsShown={true}
                  validate={this.required}
                  component={FormFieldText}
                />

                <Field
                  labelText="Phone number"
                  name="phone"
                  type="text"
                  className="boss-form__input"
                  component={FormFieldText}
                />
                <Field
                  labelText="Address"
                  name="address"
                  type="text"
                  className="boss-form__input"
                  component={FormFieldText}
                />
                <Field
                  labelText="Postcode"
                  name="postcode"
                  type="text"
                  className="boss-form__input"
                  component={FormFieldText}
                />
                <Field
                  labelText="Country"
                  name="country"
                  type="text"
                  className="boss-form__input"
                  component={FormFieldText}
                />
                <Field
                  labelText="County"
                  name="county"
                  type="text"
                  className="boss-form__input"
                  component={FormFieldText}
                />

                <div className="boss-form__field boss-form__field_justify_end">
                  <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">
                    Save
                  </button>
                </div>
              </form>
            )}
          />

          {/* <!-- Common form end --> */}
        </div>
      </article>
    );
  }
}

export default ContactDetails;
