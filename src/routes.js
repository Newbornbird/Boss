import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import { createBrowserRouter } from 'found';
import { Main } from './layouts';
import { StaffMembersPage } from './pages';
// import MainPage from './pages/MainPage';

export default createBrowserRouter({
  routeConfig: makeRouteConfig(
    // <Route path="/" Component={App}>
    //   <Route Component={MainPage} />
    // </Route>,
    <Route Component={Main}>
      <Route
        path="/"
        getData={() => {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve({ staffMembers: [] });
            }, 2000);
          });
        }}
        Component={StaffMembersPage}
      />
    </Route>,
  ),
});
