import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/commons/app';
import { windUp } from './callbacks';
import Body from '../components/containers';

  export default function() {
    return (

    <Route path="/" component={App} onEnter={windUp}>
      <IndexRoute component={Body} />
    </Route>

  );
}
