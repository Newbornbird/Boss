import React, {Component} from 'react';
import styles from '../../main.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userMenuIsActive: false
        }
    }

    toggleUserMenu = () => {
        this.setState({userMenuIsActive: !this.state.userMenuIsActive});
    }

    

  render() {
    return(
      <header className="boss-page-header">
        <div className="boss-page-header__inner">
            <div className="boss-page-header__group boss-page-header__group_role_logo">
                <a className="boss-page-header__logo">Boss</a>
            </div>
            <a href="#" className="boss-page-header__action boss-page-header__action_role_search" data-dropdown="search">Search</a>
            <a 
                href="#" 
                className={this.state.userMenuIsActive ? 
                    "boss-page-header__action boss-page-header__action_role_profile boss-page-header__action_state_active" :
                    "boss-page-header__action boss-page-header__action_role_profile"    
                } 
                data-dropdown="profile"
                onClick={this.toggleUserMenu}
            >
                Profile
            </a>
            <div className="boss-page-header__dropdowns">
                {/* <div className="boss-page-header__dropdown boss-page-header__dropdown_role_search boss-page-header__dropdown_no-select" data-dropdown="search">
                    <div className="boss-page-header__dropdown-header">
                        <p className="boss-page-header__dropdown-label boss-page-header__dropdown-label_role_search">Search</p>
                        <div className="boss-page-header__dropdown-filter">
                            <!-- Common form start -->
                            <form action="#" className="boss-form">
                                <div className="boss-form__field boss-form__field_position_last">
                                    <label className="boss-form__label">
                                        <input name="search" type="text" className="boss-form__input boss-form__input_type_narrow"/>
                                    </label>
                                </div>
                            </form>
                            <!-- Common form end -->
                        </div>
                        <a href="#" className="boss-page-header__dropdown-label boss-page-header__dropdown-label_role_action boss-page-header__dropdown-label_role_close boss-page-header__dropdown-label_type_icon">Close</a>
                    </div>
                    <div className="boss-page-header__dropdown-scroll" style={{touchAction: 'none'}}>
                        <div className="boss-page-header__dropdown-content" style={{transform: 'translate(0px, 0px) translateZ(0px)'}}>
                            <!-- Quick access start -->
                            <div className="boss-quick-access">
                                <div className="boss-quick-access__group">
                                    <div className="boss-quick-access__group-header">
                                        <h4 className="boss-quick-access__group-title">Venue</h4>
                                    </div>
                                    <div className="boss-quick-access__aliases">
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#e74c3c', borderColor: '#e74c3c'}}>Ro</span>
                                                    <span className="boss-alias__text" style={{color: '#e74c3c'}}>Rota</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#e74c3c', borderColor: '#e74c3c'}}>Sr</span>
                                                    <span className="boss-alias__text" style={{color: '#e74c3c'}}>Security Rota</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#e74c3c', borderColor: '#e74c3c'}}>Co</span>
                                                    <span className="boss-alias__text" style={{color: '#e74c3c'}}>Change Orders</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#e74c3c', borderColor: '#e74c3c'}}>Fo</span>
                                                    <span className="boss-alias__text" style={{color: '#e74c3c'}}>Fruit Orders</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#e74c3c', borderColor: '#e74c3c'}}>Sc</span>
                                                    <span className="boss-alias__text" style={{color: '#e74c3c'}}>Safe Checks</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->
                                        </div>
                                    </div>
                                </div>

                                <div className="boss-quick-access__group">
                                    <div className="boss-quick-access__group-header">
                                        <h4 className="boss-quick-access__group-title">Staff Members</h4>
                                    </div>
                                    <div className="boss-quick-access__aliases">
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#27ae60', borderColor: '#27ae60'}}>Pr</span>
                                                <span className="boss-alias__text" style={{color: '#27ae60'}}>Profile</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#27ae60', borderColor: '#27ae60'}}>As</span>
                                                    <span className="boss-alias__text" style={{color: '#27ae60'}}>Add Staff Member</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#27ae60', borderColor: '#27ae60'}}>Ho</span>
                                                    <span className="boss-alias__text" style={{color: '#27ae60'}}>Holidays</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#27ae60', borderColor: '#27ae60'}}>Hc</span>
                                                    <span className="boss-alias__text" style={{color: '#27ae60'}}>Hours Confirmation</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->
                                        </div>
                                    </div>
                                </div>

                                <div className="boss-quick-access__group">
                                    <div className="boss-quick-access__group-header">
                                        <h4 className="boss-quick-access__group-title">Reports</h4>
                                    </div>
                                    <div className="boss-quick-access__aliases">
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#9b59b6', borderColor: '#9b59b6'}}>Dr</span>
                                                    <span className="boss-alias__text" style={{color: '#9b59b6'}}>Daily Report</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#9b59b6', borderColor: '#9b59b6'}}>Wr</span>
                                                    <span className="boss-alias__text" style={{color: '#9b59b6'}}>Weekly Report</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#9b59b6', borderColor: '#9b59b6'}}>Pr</span>
                                                    <span className="boss-alias__text" style={{color: '#9b59b6'}}>Payroll Report</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->
                                        </div>
                                    </div>
                                </div>

                                <div className="boss-quick-access__group">
                                    <div className="boss-quick-access__group-header">
                                        <h4 className="boss-quick-access__group-title">Admin: General</h4>
                                    </div>
                                    <div className="boss-quick-access__aliases">
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#e67e22', borderColor: '#e67e22'}}>Na</span>
                                                    <span className="boss-alias__text" style={{color: '#e67e22'}}>Names</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->ß
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#e67e22', borderColor: '#e67e22'}}>Ve</span>
                                                    <span className="boss-alias__text" style={{color: '#e67e22'}}>Venues</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->ß
                                        </div>
                                    </div>
                                </div>

                                <div className="boss-quick-access__group">
                                    <div className="boss-quick-access__group-header">
                                        <h4 className="boss-quick-access__group-title">Admin: Users</h4>
                                    </div>
                                    <div className="boss-quick-access__aliases">
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#1abc9c', borderColor: '#1abc9c'}}>In</span>
                                                    <span className="boss-alias__text" style={{color: '#1abc9c'}}>Invites</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->ß
                                        </div>
                                    </div>
                                </div>

                                <div className="boss-quick-access__group">
                                    <div className="boss-quick-access__group-header">
                                        <h4 className="boss-quick-access__group-title">Admin: Staff Members</h4>
                                    </div>
                                    <div className="boss-quick-access__aliases">
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->ß
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#3498db', borderColor: '#3498db'}}>St</span>
                                                    <span className="boss-alias__text" style={{color: '#3498db'}}>Staff Type</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->ß
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->ß
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#3498db', borderColor: '#3498db'}}>Pr</span>
                                                    <span className="boss-alias__text" style={{color: '#3498db'}}>Pay Rates</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->ß
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#3498db', borderColor: '#3498db'}}>Sv</span>
                                                    <span className="boss-alias__text" style={{color: '#3498db'}}>Staff Vetting</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->ß
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->ß
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#3498db', borderColor: '#3498db'}}>St</span>
                                                    <span className="boss-alias__text" style={{color: '#3498db'}}>Staff Tracking</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->ß
                                        </div>
                                    </div>
                                </div>

                                <div className="boss-quick-access__group">
                                    <div className="boss-quick-access__group-header">
                                        <h4 className="boss-quick-access__group-title">Admin: Venue</h4>
                                    </div>
                                    <div className="boss-quick-access__aliases">
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->ß
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#c0392b', borderColor: '#c0392b'}}>Dr</span>
                                                    <span className="boss-alias__text" style={{color: '#c0392b'}}>Daily Report</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->ß
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->ß
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#c0392b', borderColor: '#c0392b'}}>Wr</span>
                                                    <span className="boss-alias__text" style={{color: '#c0392b'}}>Weekly Report</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->ß
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->ß
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#c0392b', borderColor: '#c0392b'}}>Pr</span>
                                                    <span className="boss-alias__text" style={{color: '#c0392b'}}>Payroll Report</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->ß
                                        </div>
                                    </div>
                                </div>

                                <div className="boss-quick-access__group">
                                    <div className="boss-quick-access__group-header">
                                        <h3 className="boss-quick-access__group-title">Admin: Reports</h3>
                                    </div>
                                    <div className="boss-quick-access__aliases">
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->ß
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#f39c12', borderColor: '#f39c12'}}>Fr</span>
                                                    <span className="boss-alias__text" style={{color: '#f39c12'}}>Finance Reports</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->ß
                                        </div>
                                        <div className="boss-quick-access__alias">
                                            <!-- Alias start -->ß
                                            <div className="boss-alias">
                                                <a href="#" className="boss-alias__link">
                                                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={{backgroundColor: '#f39c12', borderColor: '#f39c12'}}>Yr</span>
                                                    <span className="boss-alias__text" style={{color: '#f39c12'}}>Yearly Reports</span>
                                                </a>
                                            </div>
                                            <!-- Alias end -->ß
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Quick access end -->ß
                        </div>
                    <div className="iScrollVerticalScrollbar iScrollLoneScrollbar" style={{position: 'absolute', zIndex: 9999, width: '7px', bottom: '2px', top: '2px', right: '1px', overflow: 'hidden'}}>
                      <div className="iScrollIndicator" 
                        style={{boxSizing: 'border-box', position: 'absolute', background: 'rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255, 255, 255, 0.9)', borderRadius: '3px', width: '100%', transitionDuration: '0ms', display: 'block', height: '952px', transform: 'translate(0px, 0px) translateZ(0px)'}}>

                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="boss-page-header__dropdown boss-page-header__dropdown_role_profile" data-dropdown="profile">
                    {/* <!-- Menu start -->ß */}
                    <nav className="boss-menu">
                        <p className="boss-menu__label boss-menu__label_role_user">John Doe</p>
                        <a href="#" className="boss-menu__link boss-menu__link_role_logout">Logout</a>
                    </nav>
                    {/* <!-- Menu end -->ß */}
                </div>
            </div>
        </div>
      </header>
    )
  }
}


export default Header;