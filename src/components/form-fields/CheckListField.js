import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckListField extends Component {
  handleChange = clickedValue => {
    const {
      input: { onChange, value },
      multiply,
    } = this.props;

    if (multiply) {
      if (value.includes(clickedValue)) {
        onChange(value.filter(v => v !== clickedValue));
      } else {
        onChange([...value, clickedValue]);
      }
    } else {
      onChange(value === clickedValue ? null : clickedValue);
    }
  };

  render() {
    const {
      input: { value },
      multiply,
      options,
    } = this.props;
    const arrKeys = Object.keys(options);
    return (
      <div className="boss-form__field">
        {/* <!-- Choice list start --> */}
        <div className="boss-choice-list">
          <div className="boss-choice-list__header">
            <h3 className="boss-choice-list__title">Starter Employement Status Statement</h3>
          </div>
          <div className="boss-choice-list__content">
            <p className="boss-choice-list__text">Tick one that applies</p>
            <div className="boss-choice-list__controls">
              {arrKeys.map((item, index) => (
                <label key={index} className="boss-choice-list__radio-label">
                  <input
                    onChange={() => this.handleChange(item)}
                    type="checkbox"
                    checked={multiply ? value.includes(item) : value === item}
                    className="boss-choice-list__radio-button"
                  />
                  <span className="boss-choice-list__radio-label-text">{options[item]}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        {/* <!-- Choice form end --> */}
      </div>
    );
  }
}

CheckListField.propTypes = {
  labelText: PropTypes.string,
  input: PropTypes.object,
  type: PropTypes.string,
  alertTextIsShown: PropTypes.bool,
  className: PropTypes.string,
  subText: PropTypes.string,
  options: PropTypes.object,
  multiply: PropTypes.bool,
};

export default CheckListField;

// const data = {
//   status_a: 'I have supplied my P45 from my previous employer',
//   status_b:
//     'This is my first job since the 6th of April. I have not been receiving taxable jobseekers allowance, Incapacity benefits or a state/occupational pernsion',
//   status_c:
//     'This is now my only job. Since the 6th of April I have had another jobs received taxable jobseekers allowance, Incapacity benefit. I don’t receivea state/occupational pension',
//   status_d: 'I have another job or receive a state/occupational permission',
//   status_e:
//     'I left a course of higher education before the 6th of April & receive my first student loan instalmen on or after the 1st of September 1998 & I have not fully repaid my student loan',
// };
// const props = {
//   mutiply: 'true|false',
//   options: 'key-value pair'
// };
// // multiply false
// const values = {
//   employmentStatus: 'status_b',
// };
// // multiply true
// const values = {
//   employmentStatus: ['status_a', 'status_b'],
// };
