import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import Redirect from 'found/lib/Redirect';
import { createBrowserRouter } from 'found';
import { Main } from './layouts';
import { StaffMembersPage, StaffMemberProfile } from './pages';
// import MainPage from './pages/MainPage';

export default createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route path="/" Component={Main}>
      <Route
        getData={() => {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve({ staffMembers: [] });
            }, 2000);
          });
        }}
        Component={StaffMembersPage}
      />
      <Redirect from="/:id" to="/:id/profile" />
      <Route path="/:id/profile" Component={StaffMemberProfile} />
    </Route>,
  ),
});
