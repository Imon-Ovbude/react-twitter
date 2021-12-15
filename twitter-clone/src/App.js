import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import { LeftPane } from './components';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <LeftPane />
        <Switch>
          <Route path='/' exact>
            Home
          </Route>
          <Route path='/explore'>Explore</Route>
          <Route path='/notifications'>Notifications</Route>
          <Route path='/messages'>Messages</Route>
          <Route path='/bookmarks'>Bookmarks</Route>
          <Route path='/lists'>Lists</Route>
          <Route path='/profile'>Profile</Route>
        </Switch>
        <div className='right-pane'>Right Pane</div>
      </div>
    </Router>
  );
};

export default App;
