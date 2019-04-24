import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGendreOpen: false,
    };
  }

  onSubmit = values => {
    setTimeout(() => console.log('done'), 3000);
    console.log(values);
  };

  toggleGendreField = () => {
    this.setState({ isGendreOpen: !this.state.isGendreOpen });
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        initialValue={{ firstName: '', surname: '', gender: '', dateOfBirth: '' }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} action="#" className="boss-form boss-form_page_profile-edit">
            <div className="boss-form__field">
              <label className="boss-form__label">
                <span className="boss-form__label-text">First Name*</span>
                {/* <input name="first-name" type="text" className="boss-form__input" required="" /> */}
                <Field component="input" name="first-name" type="text" className="boss-form__input" />
              </label>
            </div>
            <div className="boss-form__field">
              <label className="boss-form__label">
                <span className="boss-form__label-text">Surname*</span>
                {/* <input name="surname" type="text" className="boss-form__input" required="" /> */}
                <Field
                  component="input"
                  name="surname"
                  type="text"
                  className="boss-form__input"
                  // validate={required}
                />
              </label>
            </div>
            <div className="boss-form__field">
              <label htmlFor="select-gender" className="boss-form__label">
                <span className="boss-form__label-text">Gender*</span>
              </label>
              <div className="boss-form__select">
                <div
                  className={this.state.isGendreOpen ? 'Select Select--single is-opened' : 'Select Select--single'}
                  style={this.state.isGendreOpen ? { overflow: 'visible' } : { overflow: 'hidden' }}
                  onClick={this.toggleGendreField}
                >
                  <div className="Select-control">
                    <span className="Select-multi-value-wrapper" id="react-select-2--value">
                      <div className="Select-placeholder" />
                      <div
                        role="combobox"
                        aria-expanded="true"
                        aria-owns="react-select-2--list"
                        aria-activedescendant="react-select-2--option-1"
                        className="Select-input"
                        style={{ border: '0px none', width: '1px', display: 'inline-block' }}
                      />
                    </span>
                    <span className="Select-arrow-zone">
                      <span className="Select-arrow" />
                    </span>
                  </div>
                  <div className="Select-menu-outer">
                    <div role="listbox" className="Select-menu" id="react-select-2--list">
                      <div className="Select-option is-focused" id="react-select-2--option-1">
                        Option
                      </div>
                      <div className="Select-option" id="react-select-2--option-2">
                        Option
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="boss-form__field">
              <p className="boss-form__label">
                <span className="boss-form__label-text">Date of birth*</span>
              </p>

              <div className="date-picker-input date-picker-input_type_icon">
                <div className="react-datepicker__input-container react-datepicker__tether-target react-datepicker__tether-element-attached-bottom react-datepicker__tether-element-attached-left react-datepicker__tether-target-attached-top react-datepicker__tether-target-attached-left react-datepicker__tether-enabled">
                  <div className="date-picker-input-field" />
                </div>
              </div>
            </div>
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

export default PersonalDetails;

// <form action="#" className="boss-form boss-form_page_profile-edit">
//           <div className="boss-form__field">
//             <label className="boss-form__label">
//               <span className="boss-form__label-text">First Name*</span>
//               <input name="first-name" type="text" className="boss-form__input" required="" />
//             </label>
//           </div>
//           <div className="boss-form__field">
//             <label className="boss-form__label">
//               <span className="boss-form__label-text">Surname*</span>
//               <input name="surname" type="text" className="boss-form__input" required="" />
//             </label>
//           </div>
//           <div className="boss-form__field">
//             <label htmlFor="select-gender" className="boss-form__label">
//               <span className="boss-form__label-text">Gender*</span>
//             </label>
//             <div className="boss-form__select">
//               <div className="Select Select--single" style={{ overflow: 'hidden' }}>
//                 <div className="Select-control">
//                   <span className="Select-multi-value-wrapper" id="react-select-2--value">
//                     <div className="Select-placeholder" />
//                     <div
//                       role="combobox"
//                       aria-expanded="true"
//                       aria-owns="react-select-2--list"
//                       aria-activedescendant="react-select-2--option-1"
//                       className="Select-input"
//                       style={{ border: '0px none', width: '1px', display: 'inline-block' }}
//                     />
//                   </span>
//                   <span className="Select-arrow-zone">
//                     <span className="Select-arrow" />
//                   </span>
//                 </div>
//                 <div className="Select-menu-outer">
//                   <div role="listbox" className="Select-menu" id="react-select-2--list">
//                     <div className="Select-option is-focused" id="react-select-2--option-1">
//                       Option
//                     </div>
//                     <div className="Select-option" id="react-select-2--option-2">
//                       Option
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="boss-form__field">
//             <p className="boss-form__label">
//               <span className="boss-form__label-text">Date of birth*</span>
//             </p>

//             <div className="date-picker-input date-picker-input_type_icon">
//               <div className="react-datepicker__input-container react-datepicker__tether-target react-datepicker__tether-element-attached-bottom react-datepicker__tether-element-attached-left react-datepicker__tether-target-attached-top react-datepicker__tether-target-attached-left react-datepicker__tether-enabled">
//                 <div className="date-picker-input-field" />
//               </div>
//             </div>
//           </div>
//           <div className="boss-form__field boss-form__field_justify_end">
//             <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">
//               Save
//             </button>
//           </div>
//         </form>
