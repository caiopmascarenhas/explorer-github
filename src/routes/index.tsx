import React  from 'react'
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../../src/pages/Dashboard';
import Repository from '../../src/pages/Repository';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repository} />
    </Switch>
  );
}

export default Routes;
