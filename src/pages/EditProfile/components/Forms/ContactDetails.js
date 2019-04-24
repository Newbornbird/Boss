import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { FormFieldText } from '../../../../components/form-fields';

class ContactDetails extends Component {
  onSubmit = values => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          email: ['require'],
          phone: ['require'],
        });
      }, 2000);
    });
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={values => {
          const errors = {};
          if (!values.address) {
            errors.address = 'Required';
          }
          return errors;
        }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
            <Field labelText="Email" name="email" type="email" component={FormFieldText} />
            <Field labelText="Phone number" name="phone" type="text" component={FormFieldText} />
            <Field labelText="Address" name="address" type="text" component={FormFieldText} />
            <Field labelText="Postcode" name="postcode" type="text" component={FormFieldText} />
            <Field labelText="Country" name="country" type="text" component={FormFieldText} />
            <Field labelText="County" name="county" type="text" component={FormFieldText} />

            <div className="boss-form__field boss-form__field_justify_end">
              <button
                disabled={submitting}
                type="submit"
                className="boss-button boss-form__submit boss-form__submit_adjust_single"
              >
                Save
              </button>
            </div>
          </form>
        )}
      />
    );
  }
}

export default ContactDetails;
