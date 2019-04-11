import React, { Component } from 'react';
// import styles from '../../main.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="boss-paginator boss-paginator_position_last">
        <a
          href="#"
          className="boss-paginator__action boss-paginator__action_role_prev boss-paginator__action_state_disabled"
        >
          Previous
        </a>
        <a
          href="#"
          className="boss-paginator__action boss-paginator__action_role_current boss-paginator__action_state_active"
        >
          1
        </a>
        <a href="#" className="boss-paginator__action">
          2
        </a>
        <a href="#" className="boss-paginator__action">
          3
        </a>
        <a href="#" className="boss-paginator__action">
          4
        </a>
        <a href="#" className="boss-paginator__action">
          5
        </a>
        <a className="boss-paginator__action boss-paginator__action_role_delimiter">...</a>
        <a href="#" className="boss-paginator__action boss-paginator__action_role_total">
          33
        </a>
        <a href="#" className="boss-paginator__action boss-paginator__action_role_next">
          Next
        </a>
      </nav>
    );
  }
}

export default Navigation;
