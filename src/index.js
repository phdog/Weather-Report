import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ReduxWare from './redux';
import 'semantic-ui-css/semantic.min.css';

const routes = require('./routes/index').default();
const render = appRoutes => {
  ReactDOM.render(
    <AppContainer>
      <ReduxWare routes={appRoutes} />
    </AppContainer>
    , document.querySelector('#root'));
}

render(routes);

if (module.hot) {
  const NextRoutes = require('./routes').default();
  module.hot.accept('./routes', () => { render(NextRoutes) })
}
