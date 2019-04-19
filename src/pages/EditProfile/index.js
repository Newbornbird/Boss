import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Dashboard, Content } from './components';

class EditProfile extends Component {
  render() {
    const { children, params } = this.props;
    const { id } = params;
    return (
      <Fragment>
        <Dashboard id={id} />
        <Content id={id}>{children}</Content>
      </Fragment>
    );
  }
}

EditProfile.propTypes = {
  params: PropTypes.object,
  id: PropTypes.string,
  children: PropTypes.object,
};

export default EditProfile;
