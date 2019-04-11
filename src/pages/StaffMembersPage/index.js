import React, { Component, Fragment } from 'react';
import { Dashboard, Table, Navigation, StaffMembersCount } from './components';

class StaffMembersPage extends Component {
  render() {
    return (
      <Fragment>
        <Dashboard />
        <div className="boss-page-main__content">
          <div className="boss-page-main__inner">
            <Table />
            <StaffMembersCount />
            <Navigation />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default StaffMembersPage;
