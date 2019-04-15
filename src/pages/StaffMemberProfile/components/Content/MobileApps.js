import React, { Component } from 'react';

class MobileApps extends Component {
  render() {
    return (
      <div className="boss-page-main__isle">
        <section className="boss-details">
          <p className="boss-details__pointer">
            <span className="boss-details__pointer-text">5</span>
          </p>
          <div className="boss-details__content">
            <h3 className="boss-details__title">Mobile Apps</h3>
            <ul className="boss-details__list">
              <li className="boss-details__item">
                <p className="boss-details__label">Some App</p>
                <p className="boss-details__value">
                  <span className="boss-details__value-line">
                    <a href="#" className="boss-details__value-action">
                      Send download email
                    </a>
                  </span>
                  <span className="boss-details__value-line">Last sent at 10:30 Mon 11/15/2016</span>
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Other App</p>
                <p className="boss-details__value">
                  <span className="boss-details__value-line">
                    <a href="#" className="boss-details__value-action">
                      Send download email
                    </a>
                  </span>
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label">Another App</p>
                <p className="boss-details__value">
                  <span className="boss-details__value-line">
                    <a href="#" className="boss-details__value-action">
                      Send download email
                    </a>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
export default MobileApps;
