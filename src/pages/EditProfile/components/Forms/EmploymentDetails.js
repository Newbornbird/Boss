import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { FormFieldText, FormFieldSelect, CheckListField } from '../../../../components/form-fields';

class EmploymentDetails extends Component {
  onSubmit = values => {
    console.log(values.insuranceNumber.length);
    return new Promise(resolve => {
      setTimeout(() => {
        if (values.insuranceNumber.length !== 11) {
          resolve({
            insuranceNumber: ['insuranceNumber must consist of 11 symbols'],
          });
        } else {
          resolve();
        }
      }, 1500);
    });
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={{ employmentStatus: [] }}
        validate={values => {
          const errors = {};
          if (!values.mainVenue) {
            errors.mainVenue = 'This is a required field!';
          }
          if (!values.otherVenues) {
            errors.otherVenues = 'This is a required field!';
          }
          if (!values.staffType) {
            errors.staffType = 'This is a required field!';
          }
          if (!values.payRate) {
            errors.payRate = 'This is a required field!';
          }
          return errors;
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} action="#" className="boss-form boss-form_page_profile-edit">
            <Field
              options={[
                { value: 'option1', label: 'Option1' },
                { value: 'option2', label: 'Option2' },
                { value: 'option3', label: 'Option3' },
                { value: 'option4', label: 'Option4' },
                { value: 'option5', label: 'Option5' },
              ]}
              labelText="Main Venue"
              name="mainVenue"
              component={FormFieldSelect}
            />
            <Field
              labelText="Other Venues"
              name="otherVenues"
              type="text"
              className="boss-form__input"
              component={FormFieldText}
            />
            <Field
              options={[
                { value: 'option1', label: 'Option1' },
                { value: 'option2', label: 'Option2' },
                { value: 'option3', label: 'Option3' },
              ]}
              labelText="Staff Type*"
              name="staffType"
              component={FormFieldSelect}
            />

            <div className="boss-form__field">
              <p className="boss-form__label">
                <span className="boss-form__label-text">Starts at*</span>
              </p>

              <div className="date-picker-input date-picker-input_type_icon">
                {/* <!-- React-datepicker generated markup. For the demo purposes only --> */}
                <div className="react-datepicker__input-container react-datepicker__tether-target react-datepicker__tether-element-attached-bottom react-datepicker__tether-element-attached-left react-datepicker__tether-target-attached-top react-datepicker__tether-target-attached-left react-datepicker__tether-enabled">
                  <div className="date-picker-input-field" />
                </div>
              </div>
            </div>

            <Field
              options={[
                { value: 'option1', label: 'Option1' },
                { value: 'option2', label: 'Option2' },
                { value: 'option3', label: 'Option3' },
                { value: 'option4', label: 'Option4' },
                { value: 'option5', label: 'Option5' },
              ]}
              labelText="Pay rate*"
              name="payRate"
              component={FormFieldSelect}
            />

            <Field
              labelText="Day Preference"
              name="dayPref"
              type="text"
              className="boss-form__input"
              subText={'Preferred days to work displayed to the rota (e.g mornings and weekends)'}
              component={FormFieldText}
            />

            <Field
              labelText="Hours Preference"
              name="hoursPref"
              type="text"
              className="boss-form__input"
              subText={'Preferred number of hours to work per week displayed in the rota (e.g 40,20+)'}
              component={FormFieldText}
            />
            <Field
              labelText="National Insurance Number"
              name="insuranceNumber"
              type="text"
              className="boss-form__input"
              component={FormFieldText}
            />
            <Field
              labelText="Sage ID"
              name="sageId"
              type="text"
              className="boss-form__input"
              component={FormFieldText}
            />

            <Field
              name="employmentStatus"
              multiply={false}
              options={{
                status_a: 'I have supplied my P45 from my previous employer',
                status_b:
                  'This is my first job since the 6th of April. I have not been receiving taxable jobseekers allowance, Incapacity benefits or a state/occupational pernsion',
                status_c:
                  'This is now my only job. Since the 6th of April I have had another jobs received taxable jobseekers allowance, Incapacity benefit. I don’t receivea state/occupational pension',
                status_d: 'I have another job or receive a state/occupational permission',
                status_e:
                  'I left a course of higher education before the 6th of April & receive my first student loan instalmen on or after the 1st of September 1998 & I have not fully repaid my student loan',
              }}
              component={CheckListField}
            />

            <div className="boss-form__field boss-form__field_justify_end">
              <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">
                Save
              </button>
            </div>
          </form>
        )}
      />
    );
  }
}

export default EmploymentDetails;
