import React, { Component } from 'react';
import Details from './Details';
import DetailsItem from './DetailsItem';

class Content extends Component {
  render() {
    return (
      <div className="boss-page-main__content">
        <div className="boss-page-main__inner">
          <div className="boss-page-main__flow">
            <Details number="1" title="Employment Details">
              <DetailsItem title="Main Venue">McCoolay’s</DetailsItem>
              <DetailsItem title="Other Venues">N / A</DetailsItem>
              <DetailsItem title="Job Type">Floor Staff</DetailsItem>
              <DetailsItem title="Start Date">Tue 11/15/2016</DetailsItem>
              <DetailsItem title="Pay Rate">Age 18-20</DetailsItem>
              <DetailsItem title="Hour Preference">20 - 25</DetailsItem>
              <DetailsItem title="Day Preference">Thursday / Saturday / Sunday</DetailsItem>
              <DetailsItem title="National Insurance Number">PE630024B</DetailsItem>
              <DetailsItem title="Sage ID">260</DetailsItem>
              <DetailsItem title="Status Statement">A</DetailsItem>
            </Details>
            <Details number="2" title="Account Details">
              <DetailsItem title="Created">Mon 11/14/2016</DetailsItem>
              <DetailsItem title="Status">Active</DetailsItem>
              <DetailsItem title="User">No Associated User</DetailsItem>
              <DetailsItem title="Application Password">
                <span className="boss-details__value-line">Set at 10:30 Mon 11/15/2016</span>
              </DetailsItem>
              <DetailsItem title="Avatar Status">
                Not Setup for Facial Recognition
                <span className="boss-tooltip boss-tooltip_position_bottom">
                  <span className="boss-tooltip__icon" />
                  <span className="boss-tooltip__content">
                    <span className="boss-tooltip__text">
                      The current avatar cannot be used for apps that use facial recognition. Update the avatar to
                      enable this functionality.
                    </span>
                  </span>
                </span>
              </DetailsItem>
              <DetailsItem title="ID Scanner App Guid">
                <img src="images/hello-world_512.png" alt="qr code preview" className="boss-details__qr" />
              </DetailsItem>
            </Details>
            <Details number="3" title="Personal Details">
              <DetailsItem title="Name">Trulla Collier</DetailsItem>
              <DetailsItem title="Gender">Female</DetailsItem>
              <DetailsItem title="Date of Birth">23 April 1999</DetailsItem>
            </Details>
            <Details number="4" title="Contact Details">
              <DetailsItem title="Email Address">trulla.collier@yahoo.com</DetailsItem>
              <DetailsItem title="Phone Number">+123 342 342</DetailsItem>
              <DetailsItem title="Address">
                <span className="boss-details__value-line">907 Charisse Junction</span>
                <span className="boss-details__value-line">New Jersey</span>
                <span className="boss-details__value-line">Monaco</span>
                <span className="boss-details__value-line">42448</span>
              </DetailsItem>
            </Details>
            <Details number="5" title="Mobile Apps">
              <DetailsItem title="Some App">
                <span className="boss-details__value-line">
                  <a href="#" className="boss-details__value-action">
                    Send download email
                  </a>
                </span>
                <span className="boss-details__value-line">Last sent at 10:30 Mon 11/15/2016</span>
              </DetailsItem>
              <DetailsItem title="Other App">
                <span className="boss-details__value-line">
                  <a href="#" className="boss-details__value-action">
                    Send download email
                  </a>
                </span>
              </DetailsItem>
              <DetailsItem title="Another App">
                <span className="boss-details__value-line">
                  <a href="#" className="boss-details__value-action">
                    Send download email
                  </a>
                </span>
              </DetailsItem>
            </Details>
            <Details number="6" title="Revisions History">
              <button className="boss-button boss-button_role_view-history boss-button_type_small">View History</button>
            </Details>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
