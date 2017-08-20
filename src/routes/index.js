import React from 'react';
import { Route } from 'react-router';
import App from '../components/commons/app';
import { getGeoLocation } from './callbacks';

  export default function() {
    return (

    <Route path="/" component={App} onEnter={getGeoLocation}>

    </Route>

  );
}
