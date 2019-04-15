import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMenuIsActive: false,
    };
  }

  toggleUserMenu = () => {
    this.setState({ userMenuIsActive: !this.state.userMenuIsActive });
  };

  render() {
    return (
      <div className="boss-page-header__inner">
        <div className="boss-page-header__group boss-page-header__group_role_logo">
          <a className="boss-page-header__logo">Boss</a>
        </div>
        <a href="#" className="boss-page-header__action boss-page-header__action_role_search" data-dropdown="search">
          Search
        </a>
        <a
          href="#"
          className={
            this.state.userMenuIsActive
              ? 'boss-page-header__action boss-page-header__action_role_profile boss-page-header__action_state_active'
              : 'boss-page-header__action boss-page-header__action_role_profile'
          }
          data-dropdown="profile"
          onClick={this.toggleUserMenu}
        >
          Profile
        </a>
        <div className="boss-page-header__dropdowns">
          <div className="boss-page-header__dropdown boss-page-header__dropdown_role_profile" data-dropdown="profile">
            <nav className="boss-menu">
              <p className="boss-menu__label boss-menu__label_role_user">John Doe</p>
              <a href="#" className="boss-menu__link boss-menu__link_role_logout">
                Logout
              </a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
