import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import Redirect from 'found/lib/Redirect';
import { createBrowserRouter } from 'found';
import { Main } from './layouts';
import { StaffMembersPage, StaffMemberProfile, EditProfile } from './pages';
import { EmploymentDetails, PersonalDetails, ContactDetails } from './pages/EditProfile/components/Forms';
// import MainPage from './pages/MainPage';

export default createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route path="/" Component={Main}>
      <Route Component={StaffMembersPage} />
      <Redirect from="/:id" to="/:id/profile" />
      <Route path="/:id/profile" Component={StaffMemberProfile} />
      <Redirect from="/:id/edit" to="/:id/edit/employment" />
      <Route path="/:id/edit" Component={EditProfile}>
        <Route path="employment" Component={EmploymentDetails} />
        <Route path="personal" Component={PersonalDetails} />
        <Route path="contact" Component={ContactDetails} />
      </Route>
    </Route>,
  ),
});
