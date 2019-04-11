import React, {Component} from 'react';
// import styles from '../../main.css';

class Dashboard extends Component {
  render() {
    return(
      <div className="boss-page-main__dashboard">
          <div className="boss-page-main__inner">
              {/* <!-- Page dashboard start --> */}
            <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_staff-members-index">
              <div className="boss-page-dashboard__group">
                <h1 className="boss-page-dashboard__title">
                    <span className="boss-page-dashboard__title-text">Staff Members</span>
                    <span className="boss-page-dashboard__title-info">+695</span>
                </h1>

                <div className="boss-page-dashboard__buttons-group">
                    <a href="#" className="boss-button boss-button_role_add boss-page-dashboard__button">Add Staff Members</a>
                </div>
            </div>

                  {/* <div className="boss-page-dashboard__filter">
                      <!-- Filter start -->
                      <div className="boss-dropdown">
                          <div className="boss-dropdown__header">
                              <a href="#" className="boss-dropdown__switch boss-dropdown__switch_role_filter">Filter</a>
                          </div>
                          <div className="boss-dropdown__content" style="display: none;">
                              <div className="boss-dropdown__content-inner">
                                  <!-- Form start -->
                                  <form action="#" className="boss-form">
                                      <div className="boss-form__row boss-form__row_position_last">
                                          <div className="boss-form__group boss-form__group_layout_half">
                                              <div className="boss-form__field">
                                                  <label className="boss-form__label">
                                                      <span className="boss-form__label-text">Name</span>
                                                      <input name="name" type="text" className="boss-form__input">
                                                  </label>
                                              </div>
                                              <div className="boss-form__field">
                                                  <label className="boss-form__label">
                                                      <span className="boss-form__label-text">Email</span>
                                                      <input name="email" type="email" className="boss-form__input">
                                                  </label>
                                              </div>
                                              <div className="boss-form__field">
                                                  <label className="boss-form__label"><span className="boss-form__label-text">Status</span></label>
                                                  <div className="boss-form__select">
                                                      <!-- React-select generated markup. For the demo purposes only -->
                                                      <div className="Select Select--single" style="overflow: hidden;">
                                                          <div className="Select-control"><span className="Select-multi-value-wrapper" id="react-select-2--value"><div class="Select-placeholder">Any</div><div role="combobox" aria-expanded="true" aria-owns="react-select-2--list" aria-activedescendant="react-select-2--option-1" class="Select-input" style="border: 0px none; width: 1px; display: inline-block;"></div></span><span class="Select-arrow-zone"><span class="Select-arrow"></span></span>
                                                          </div>
                                                          <div className="Select-menu-outer">
                                                              <div role="listbox" class="Select-menu" id="react-select-2--list">
                                                                  <div className="Select-option is-focused" id="react-select-2--option-1">Option</div>
                                                                  <div className="Select-option" id="react-select-2--option-2">Option</div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="boss-form__group boss-form__group_layout_half">
                                              <div className="boss-form__field">
                                                  <div className="boss-form__label-group">
                                                      <p className="boss-form__label"><span className="boss-form__label-text">Venue</span></p>

                                                      <label className="boss-form__checkbox-label boss-form__checkbox-label_context_label-group">
                                                          <input name="master-venue" value="true" type="checkbox" className="boss-form__checkbox-input" checked="">
                                                          <span className="boss-form__checkbox-label-text">Master venue only</span>
                                                      </label>
                                                  </div>
                                                  <div className="boss-form__select">
                                                      <!-- React-select generated markup. For the demo purposes only -->
                                                      <div class="Select Select--single" style="overflow: hidden;">
                                                          <div class="Select-control"><span class="Select-multi-value-wrapper" id="react-select-2--value"><div class="Select-placeholder">Any</div><div role="combobox" aria-expanded="true" aria-owns="react-select-2--list" aria-activedescendant="react-select-2--option-1" class="Select-input" style="border: 0px none; width: 1px; display: inline-block;"></div></span><span class="Select-arrow-zone"><span class="Select-arrow"></span></span>
                                                          </div>
                                                          <div class="Select-menu-outer">
                                                              <div role="listbox" class="Select-menu" id="react-select-2--list">
                                                                  <div class="Select-option is-focused" id="react-select-2--option-1">Option</div>
                                                                  <div class="Select-option" id="react-select-2--option-2">Option</div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="boss-form__field">
                                                  <label class="boss-form__label"><span class="boss-form__label-text">Staff Type</span></label>
                                                  <div class="boss-form__select">
                                                      <!-- React-select generated markup. For the demo purposes only -->
                                                      <div class="Select Select--single" style="overflow: hidden;">
                                                          <div class="Select-control"><span class="Select-multi-value-wrapper" id="react-select-2--value"><div class="Select-placeholder">Any</div><div role="combobox" aria-expanded="true" aria-owns="react-select-2--list" aria-activedescendant="react-select-2--option-1" class="Select-input" style="border: 0px none; width: 1px; display: inline-block;"></div></span><span class="Select-arrow-zone"><span class="Select-arrow"></span></span>
                                                          </div>
                                                          <div class="Select-menu-outer">
                                                              <div role="listbox" class="Select-menu" id="react-select-2--list">
                                                                  <div class="Select-option is-focused" id="react-select-2--option-1">Option</div>
                                                                  <div class="Select-option" id="react-select-2--option-2">Option</div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="boss-form__field boss-form__field_justify_end boss-form__field_no-label">
                                                  <button class="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">Update</button>
                                              </div>
                                          </div>
                                      </div>
                                  </form>
                                  <!-- Form end -->
                              </div>
                          </div>
                      </div>
                      <!-- Filter end -->
                  </div> */}
              </div>
              {/* <!-- Page dashboard end --> */}
          </div>
      </div>
    )
  }
}

export default Dashboard;

