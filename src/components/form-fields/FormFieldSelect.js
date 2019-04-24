import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import cn from 'class-names';

class FormFieldSelect extends Component {
  handleChange = selectedOption => {
    const {
      input: { onChange },
    } = this.props;
    if (selectedOption === null) {
      onChange(null);
    } else {
      onChange(selectedOption.value);
    }
  };

  render() {
    const {
      labelText,
      options,
      input,
      meta: { submitError, error, touched },
    } = this.props;
    const hasValidationError = error || submitError;
    const inputClassNames = cn('boss-form__select', { 'boss-form__select_state_error': hasValidationError && touched });
    // console.log(this.props);
    return (
      <div className="boss-form__field">
        <label htmlFor="select-venue" className="boss-form__label">
          <span className="boss-form__label-text">{labelText}</span>
        </label>
        <div className={inputClassNames}>
          <Select
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            value={input.value}
            onChange={this.handleChange}
            options={options}
            searchable={false}
          />
        </div>

        {error && touched ? (
          <div className="boss-form__error">
            <p className="boss-form__error-text">
              <span className="boss-form__error-line">{error}</span>
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}

FormFieldSelect.propTypes = {
  labelText: PropTypes.string,
  input: PropTypes.object,
  options: PropTypes.array,
  meta: PropTypes.object,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

export default FormFieldSelect;
