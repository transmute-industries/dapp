import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import AppConnected from './containers/App';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { store, history } from './store/store';

import { ConnectedRouter, } from 'react-router-redux';
import { Route } from 'react-router';

import * as injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

console.log('🦄  Transmute  🦄')

// let App:any = AppConnected;
import HomePage from './components/Home/HomePage';


import HealthcareDemo from './components/Transmute/Healthcare/Healthcare';

import Web3Settings from './components/Transmute/Web3/Web3Settings';

import UPortRegister from './components/Transmute/UPortRegister/UPortRegister';


import { getAccounts } from './actions/transmute'
store.dispatch(getAccounts())

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider, lightBaseTheme } from 'material-ui/styles';

const lightMuiTheme = getMuiTheme(lightBaseTheme);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div>
          <Route exact={true} path="/web-app-starter-kit/" component={HomePage} />
          <Route path="/web-app-starter-kit/web3" component={Web3Settings} />

          <Route path="/web-app-starter-kit/healthcare" component={HealthcareDemo} />
          <Route path="/web-app-starter-kit/uport" component={UPortRegister} />

          {/* <Redirect from='*' to='/web-app-starter-kit/' /> */}
        </div>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);