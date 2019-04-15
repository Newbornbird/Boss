import React, { Component } from 'react';
import AccountDetails from './AccountDetails';
import ContactDetails from './ContactDetails';
import EmploymentDetails from './EmploymentDetails';
import MobileApps from './MobileApps';
import PersonalDetails from './PersonalDetails';
import RevisionsHistory from './RevisionsHistory';

class Content extends Component {
  render() {
    return (
      <div className="boss-page-main__content">
        <div className="boss-page-main__inner">
          <div className="boss-page-main__flow">
            <EmploymentDetails />
            <AccountDetails />
            <PersonalDetails />
            <ContactDetails />
            <MobileApps />
            <RevisionsHistory />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
