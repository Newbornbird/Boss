import React, { Component } from 'react';
import Dashboard from  './components/Dashboard';
import Table from './components/Table';
import Navigation from './components/Navigation';
import StaffMembersComponent from './components/StaffMembersCount';
import styles from '../../main.css';

class MainPage extends Component {
  render() {
    return(
      <main className="boss-page-main">
        <Dashboard/>
        <div className="boss-page-main__content">
          <div className="boss-page-main__inner">
            <Table />
            <StaffMembersComponent/>
            <Navigation />
          </div>
        </div>
      </main>
    )
  }
}

export default MainPage;