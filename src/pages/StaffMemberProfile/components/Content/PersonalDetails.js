import React, { Component } from 'react';

class PersonalDetails extends Component {
  render() {
    return (
      <div className="boss-page-main__isle">
        <section className="boss-details">
          <p className="boss-details__pointer">
            <span className="boss-details__pointer-text">3</span>
          </p>
          <div className="boss-details__content">
            <h3 className="boss-details__title">Personal Details</h3>
            <ul className="boss-details__list">
              <li className="boss-details__item">
                <p className="boss-details__label">Name</p>
                <p className="boss-details__value">Trulla Collier</p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Gender</p>
                <p className="boss-details__value">Female</p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Date of Birth</p>
                <p className="boss-details__value">23 April 1999</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
export default PersonalDetails;
