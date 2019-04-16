import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
  render() {
    const { number, title, children } = this.props;
    return (
      <div className="boss-page-main__isle">
        <section className="boss-details">
          <p className="boss-details__pointer">
            <span className="boss-details__pointer-text">{number}</span>
          </p>
          <div className="boss-details__content">
            <h3 className="boss-details__title">{title}</h3>
            <ul className="boss-details__list">{children}</ul>
          </div>
        </section>
      </div>
    );
  }
}

Details.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Details;
