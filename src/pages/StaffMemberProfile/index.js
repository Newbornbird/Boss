import React, { Component, Fragment } from 'react';
import { Dashboard, Content } from './components';

class StaffMemberProfile extends Component {
  render() {
    const { params } = this.props;
    const { id } = params;
    return (
      <Fragment>
        <Dashboard id={id} />
        <Content />
      </Fragment>
    );
  }
}

export default StaffMemberProfile;
