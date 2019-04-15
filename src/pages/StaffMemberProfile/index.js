import React, { Component, Fragment } from 'react';
import { Dashboard, Content } from './components';

class StaffMemberProfile extends Component {
  render() {
    return (
      <Fragment>
        <Dashboard />
        <Content />
      </Fragment>
    );
  }
}

export default StaffMemberProfile;
