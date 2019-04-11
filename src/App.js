import React, { Component } from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import { createBrowserRouter } from 'found';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import styles from './main.css';


class App extends Component {
  render() {
    let {children} = this.props;
    return (
      <div>
        <Header/>
        {children}
      </div>
    );
  }
}

export let BrowserRouter = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route path="/" Component={App}>
      <Route Component={MainPage} />
    </Route>
  )
})

export default App;
