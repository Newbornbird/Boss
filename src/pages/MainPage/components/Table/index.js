import React, { Component } from 'react';
import Row from './Row';
import MainRow from './MainRow';
// import styles from '../../main.css';

class Table extends Component {
  render() {
    return(
    
      <div className="boss-table boss-table_page_staff-members-index">
        <MainRow/>
          <div className="boss-table__row">
              <div className="boss-table__cell">
                  <div className="boss-table__image">
                      <a href="#" className="boss-table__link">
                          <div className="boss-avatar boss-avatar_type_combined">
                              <img src="images/avatars/download.jpeg" className="boss-avatar__image"/>
                          </div>
                      </a>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Name</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">John Doe</a></p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Modified</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">18:00 Wed 11/16/2016</a></p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Status</p>
                      <p className="boss-table__text">
                          <button className="boss-button boss-button_type_small boss-button_role_enabled boss-button_type_no-behavior">Enabled</button>
                      </p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Type</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">Manager</a></p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Master Venue</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">Black</a></p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Work Venues</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">Mint Green, McCooley's</a></p>
                  </div>
              </div>
          </div>
          <Row/>
          <div className="boss-table__row">
              <div className="boss-table__cell">
                  <div className="boss-table__image">
                      <a href="#" className="boss-table__link">
                          <div className="boss-avatar boss-avatar_type_combined">
                              <img src="images/avatars/download.jpeg" className="boss-avatar__image"/>
                          </div>
                      </a>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Name</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">Jack McDougal</a></p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Modified</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">11:00 Fri 11/18/2016</a></p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Status</p>
                      <p className="boss-table__text">
                          <button className="boss-button boss-button_type_small boss-button_role_disabled boss-button_type_no-behavior">Disabled</button>
                      </p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Type</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">Manager</a></p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Master Venue</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">Blue</a></p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Work Venues</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">Green, McCooley's</a></p>
                  </div>
              </div>
          </div>
          <div className="boss-table__row">
              <div className="boss-table__cell">
                  <div className="boss-table__image">
                      <a href="#" className="boss-table__link">
                          <div className="boss-avatar boss-avatar_type_combined">
                              <img src="images/avatars/download.jpeg" className="boss-avatar__image"/>
                          </div>
                      </a>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Name</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">John Doe</a></p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Modified</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">18:00 Wed 11/16/2016</a></p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Status</p>
                      <p className="boss-table__text">
                          <button className="boss-button boss-button_type_small boss-button_role_enabled boss-button_type_no-behavior">Enabled</button>
                      </p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Type</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">Manager</a></p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Master Venue</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">Green</a></p>
                  </div>
              </div>
              <div className="boss-table__cell">
                  <div className="boss-table__info">
                      <p className="boss-table__label">Work Venues</p>
                      <p className="boss-table__text"><a href="#" className="boss-table__link">Black, McCooley's</a></p>
                  </div>
              </div>
          </div>
      </div>

    )
  }
}

export default Table;
