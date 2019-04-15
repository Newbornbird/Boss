import React, { Component } from 'react';

class AccountDetails extends Component {
  render() {
    return (
      <div className="boss-page-main__isle">
        <section className="boss-details">
          <p className="boss-details__pointer">
            <span className="boss-details__pointer-text">2</span>
          </p>
          <div className="boss-details__content">
            <h3 className="boss-details__title">Account Details</h3>
            <ul className="boss-details__list">
              <li className="boss-details__item">
                <p className="boss-details__label boss-details__label_size_small">Created</p>
                <p className="boss-details__value">Mon 11/14/2016</p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label boss-details__label_size_small">Status</p>
                <p className="boss-details__value">Active</p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label boss-details__label_size_small">User</p>
                <p className="boss-details__value">No Associated User</p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label boss-details__label_size_small">Application Password</p>
                <p className="boss-details__value">
                  <span className="boss-details__value-line">Set at 10:30 Mon 11/15/2016</span>
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label boss-details__label_size_small">Avatar Status</p>
                <p className="boss-details__value">
                  Not Setup for Facial Recognition
                  <span className="boss-tooltip boss-tooltip_position_bottom">
                    <span className="boss-tooltip__icon" />
                    <span className="boss-tooltip__content">
                      <span className="boss-tooltip__text">
                        The current avatar cannot be used for apps that use facial recognition. Update the avatar to
                        enable this functionality.
                      </span>
                    </span>
                  </span>
                </p>
              </li>
              <li className="boss-details__item">
                <p className="boss-details__label boss-details__label_size_small">ID Scanner App Guid</p>
                <p className="boss-details__value">
                  <img src="images/hello-world_512.png" alt="qr code preview" className="boss-details__qr" />
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default AccountDetails;
