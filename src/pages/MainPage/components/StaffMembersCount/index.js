import React, { Component } from 'react';
// import styles from '../../main.css';

class StaffMembersComponent extends Component {
  render() {
    return(
      <div className="boss-page-main__count boss-page-main__count_space_large">
        <span className="boss-page-main__count-text">Showing </span>
        <span className="boss-page-main__count-text boss-page-main__count-text_marked">4 </span>
        <span className="boss-page-main__count-text">of </span>
        <span className="boss-page-main__count-text boss-page-main__count-text_marked">132</span>
      </div>
    )
  }
}

export default StaffMembersComponent;