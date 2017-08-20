import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/commons/app';
import { getGeoLocation } from './callbacks';
import Search from '../components/containers/search';

  export default function() {
    return (

    <Route path="/" component={App} onEnter={getGeoLocation}>
      <IndexRoute component={Search} />
    </Route>

  );
}
