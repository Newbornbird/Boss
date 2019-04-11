import React, {Component} from 'react';

class MainRow extends Component {
  render() {
    return(
      <div className="boss-table__row">
        <div className="boss-table__cell boss-table__cell_role_header"></div>
        <div className="boss-table__cell boss-table__cell_role_header">Name</div>
        <div className="boss-table__cell boss-table__cell_role_header">Modified</div>
        <div className="boss-table__cell boss-table__cell_role_header">Status</div>
        <div className="boss-table__cell boss-table__cell_role_header">Type</div>
        <div className="boss-table__cell boss-table__cell_role_header">Master Venue</div>
        <div className="boss-table__cell boss-table__cell_role_header">Work Venues</div>
    </div>
    )
  }
}

export default MainRow;