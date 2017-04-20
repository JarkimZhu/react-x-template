/**
 * Created by zhujiaqi on 2017/4/20.
 */
import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';

import LoginPage from './routes/LoginPage';
import PolicyPage from './routes/PolicyPage';

export default function RouterConfig(history, rootComponent) {
  return (
    <Router history={history}>
      <Route path="/" component={rootComponent}>
        <IndexRoute component={LoginPage} />
        <Route path="/policy" component={PolicyPage} />
      </Route>
    </Router>
  );
}
