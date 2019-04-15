import React, { Component } from 'react';

class ContactDetails extends Component {
  render() {
    return (
      <div className="boss-page-main__isle">
        <section className="boss-details">
          <p className="boss-details__pointer">
            <span className="boss-details__pointer-text">4</span>
          </p>
          <div className="boss-details__content">
            <h3 className="boss-details__title">Contact Details</h3>
            <ul className="boss-details__list">
              <li className="boss-details__item">
                <p className="boss-details__label boss-details__label_size_small">Email Address</p>
                <p className="boss-details__value boss-details__value_adjust_wrap">trulla.collier@yahoo.com</p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label boss-details__label_size_small">Phone Number</p>
                <p className="boss-details__value">+123 342 342</p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label boss-details__label_size_small">Address</p>
                <p className="boss-details__value">
                  <span className="boss-details__value-line">907 Charisse Junction</span>
                  <span className="boss-details__value-line">New Jersey</span>
                  <span className="boss-details__value-line">Monaco</span>
                  <span className="boss-details__value-line">42448</span>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
export default ContactDetails;
