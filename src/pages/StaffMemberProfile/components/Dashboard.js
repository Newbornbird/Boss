import React, { Component } from 'react';
import { Link } from 'found';

class Dashboard extends Component {
  render() {
    return (
      <div className="boss-page-main__dashboard">
        <div className="boss-page-main__inner">
          <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile">
            <div className="boss-page-dashboard__group">
              <div className="boss-page-dashboard__user-summary">
                <div className="boss-user-summary">
                  <div className="boss-user-summary__side">
                    <div className="boss-user-summary__avatar">
                      <div className="boss-user-summary__avatar-inner">
                        <img
                          src="../images/avatars/user-info_pic.jpg"
                          alt="Trulla Collier"
                          className="boss-user-summary__pic"
                        />
                      </div>
                      <a href="#" className="boss-user-summary__avatar-icon boss-user-summary__avatar-icon_role_edit">
                        Edit
                      </a>
                    </div>
                  </div>
                  <div className="boss-user-summary__content">
                    <div className="boss-user-summary__header">
                      <h2 className="boss-user-summary__name">Trulla Collier</h2>
                      <span
                        className="boss-button boss-button_type_small boss-button_type_no-behavior boss-user-summary__label"
                        style={{ backgroundColor: '#f0af84' }}
                      >
                        Floor Staff
                      </span>
                    </div>
                    <ul className="boss-user-summary__review-list">
                      <li className="boss-user-summary__review-item boss-user-summary__review-item_role_venue">
                        <span className="boss-user-summary__review-marked">Some Venue Name</span>
                      </li>
                    </ul>
                    <div className="boss-user-summary__contacts">
                      <a
                        href="mailto:trulla.collier@yahoo.com"
                        className="boss-user-summary__link boss-user-summary__link_role_email boss-user-summary__link_adjust_wrap"
                      >
                        trulla.collier@yahoo.com
                      </a>
                      <a href="tel:123342342" className="boss-user-summary__link boss-user-summary__link_role_phone">
                        +123 342 342
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boss-page-dashboard__buttons-group">
                <Link
                  to={`${window.location.pathname}/edit`}
                  className="boss-button boss-button_role_edit boss-page-dashboard__button"
                >
                  Edit Profile
                </Link>
              </div>
            </div>

            <div className="boss-page-dashboard__switches">
              <a
                href="#"
                className="boss-button boss-button_type_small boss-button_role_profile boss-button_state_active boss-page-dashboard__switch"
              >
                Profile
              </a>
              <a
                href="#"
                className="boss-button boss-button_type_small boss-button_role_holidays boss-page-dashboard__switch"
              >
                Holidays
              </a>
              <a
                href="#"
                className="boss-button boss-button_type_small boss-button_role_timelog boss-page-dashboard__switch"
              >
                Owed hours
              </a>
              <a
                href="#"
                className="boss-button boss-button_type_small boss-button_role_accessories boss-page-dashboard__switch"
              >
                Accessories
              </a>
              <a
                href="#"
                className="boss-button boss-button_type_small boss-button_role_shifts boss-page-dashboard__switch"
              >
                Shifts
              </a>
              <a
                href="#"
                className="boss-button boss-button_type_small boss-button_role_payments boss-page-dashboard__switch"
              >
                Payments
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
