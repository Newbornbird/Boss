import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DetailsItem extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <li className="boss-details__item">
        <p className="boss-details__label">{title}</p>
        <p className="boss-details__value">{children}</p>
      </li>
    );
  }
}

DetailsItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default DetailsItem;
