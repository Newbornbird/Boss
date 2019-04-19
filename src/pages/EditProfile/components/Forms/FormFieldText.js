import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormFieldText extends Component {
  render() {
    const { labelText, input, type, className, alertTextIsShown = false, subText = '' } = this.props;
    // console.log(this.props);
    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
          <span className="boss-form__label-text">{labelText}</span>
          <input {...input} type={type} className={className} />
        </label>
        <div className="boss-form__error" style={alertTextIsShown ? {} : { display: 'none' }}>
          <p className="boss-form__error-text">
            <span className="boss-form__error-line">This is a required field!</span>
            <span className="boss-form__error-line">It should be a correct email address!</span>
          </p>
        </div>
        <p className="boss-form__field-note" style={subText ? {} : { display: 'none' }}>
          {subText}
        </p>
      </div>
    );
  }
}

FormFieldText.propTypes = {
  labelText: PropTypes.string,
  input: PropTypes.object,
  type: PropTypes.string,
  alertTextIsShown: PropTypes.bool,
  className: PropTypes.string,
  subText: PropTypes.string,
};

export default FormFieldText;
