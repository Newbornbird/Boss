import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormFieldRadio extends Component {
  render() {
    const { labelText, input, type, className } = this.props;
    console.log(this.props);
    return (
      <label className="boss-choice-list__radio-label">
        <input {...input} type={type} className={className} />
        <span className="boss-choice-list__radio-label-text">{labelText}</span>
      </label>
    );
  }
}

FormFieldRadio.propTypes = {
  labelText: PropTypes.string,
  input: PropTypes.object,
  type: PropTypes.string,
  alertTextIsShown: PropTypes.bool,
  className: PropTypes.string,
  subText: PropTypes.string,
};

export default FormFieldRadio;
