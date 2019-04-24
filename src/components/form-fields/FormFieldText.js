import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'class-names';

class FormFieldText extends Component {
  renderErrors = submitErrors => {
    if (!submitErrors) {
      return null;
    }
    return submitErrors.map((error, index) => {
      return (
        <p key={index} className="boss-form__error-text">
          <span className="boss-form__error-line">{error}</span>
        </p>
      );
    });
  };

  render() {
    const {
      labelText,
      input,
      meta: { submitError, error, touched },
      type,
      subText = '',
    } = this.props;
    const hasValidationError = error || submitError;
    const inputClassNames = cn('boss-form__input', { 'boss-form__input_state_error': hasValidationError && touched });
    // console.log(this.props);
    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
          <span className="boss-form__label-text">{labelText}</span>
          <input {...input} type={type} className={inputClassNames} />
        </label>
        {hasValidationError && touched && (
          <div className="boss-form__error">
            {this.renderErrors(submitError)}
            <p className="boss-form__error-text">
              <span className="boss-form__error-line">{error}</span>
            </p>
          </div>
        )}
        <p className="boss-form__field-note" style={subText ? {} : { display: 'none' }}>
          {subText}
        </p>
      </div>
    );
  }
}

FormFieldText.propTypes = {
  meta: PropTypes.object,
  labelText: PropTypes.string,
  input: PropTypes.object,
  type: PropTypes.string,
  alertTextIsShown: PropTypes.bool,
  className: PropTypes.string,
  subText: PropTypes.string,
};

export default FormFieldText;
