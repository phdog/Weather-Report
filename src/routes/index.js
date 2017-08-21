import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/commons/app';
import { getGeoLocation } from './callbacks';
import Body from '../components/containers';

  export default function() {
    return (

    <Route path="/" component={App} onEnter={getGeoLocation}>
      <IndexRoute component={Body} />
    </Route>

  );
}
