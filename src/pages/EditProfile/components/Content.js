import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'found';

class Content extends Component {
  render() {
    const { id, children } = this.props;
    return (
      <div className="boss-page-main__content">
        <div className="boss-page-main__inner">
          {/* <!-- Content switche start --> */}
          <div className="boss-content-switcher">
            <div className="boss-content-switcher__inner">
              <aside className="boss-content-switcher__side">
                <nav className="boss-content-switcher__nav">
                  <Link
                    to={`/${id}/profile/edit/employment`}
                    activeClassName="boss-content-switcher__nav-link boss-content-switcher__nav-link_state_active"
                    className="boss-content-switcher__nav-link"
                  >
                    Employment Details
                  </Link>

                  <Link
                    to={`/${id}/profile/edit/personal`}
                    className="boss-content-switcher__nav-link"
                    activeClassName="boss-content-switcher__nav-link boss-content-switcher__nav-link_state_active"
                    data-chapter="personal"
                  >
                    Personal Details
                  </Link>
                  <Link
                    to={`/${id}/profile/edit/contact`}
                    className="boss-content-switcher__nav-link"
                    activeClassName="boss-content-switcher__nav-link boss-content-switcher__nav-link_state_active"
                    data-chapter="contact"
                  >
                    Contact Details
                  </Link>
                </nav>
              </aside>
              <section className="boss-content-switcher__chapters">{children}</section>
            </div>
          </div>
          {/* <!-- Content switcher end --> */}
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  // children: PropTypes.node,
  id: PropTypes.string,
  children: PropTypes.object,
};

export default Content;
