import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from '../components';

class Main extends Component {
  render() {
    const { children } = this.props;
    return (
      <body className="boss-body">
        <header className="boss-page-header">
          <Header />
        </header>
        <main className="boss-page-main">{children}</main>
      </body>
    );
  }
}

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
