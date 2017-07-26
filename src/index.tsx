import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, } from 'react-router-redux';
import { Route } from 'react-router';
// https://github.com/zilverline/react-tap-event-plugin
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider, lightBaseTheme } from 'material-ui/styles';
import './index.css';

import { store, history } from './store/store';
// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

console.debug('🦄  Transmute  🦄');

import HomePage from './components/Home/HomePage';
import HealthcareDemo from './components/Transmute/Healthcare/Healthcare';
import Web3Settings from './components/Transmute/Web3/Web3Settings';
import UPortRegister from './components/Transmute/UPortRegister/UPortRegister';
import { getAccounts } from './actions/transmute';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

store.dispatch(getAccounts());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div>
          <Route exact={true} path="/dapp/" component={HomePage} />
          <Route path="/dapp/web3" component={Web3Settings} />

          <Route path="/dapp/healthcare" component={HealthcareDemo} />
          <Route path="/dapp/uport" component={UPortRegister} />

          {/* <Redirect from='*' to='/dapp/' /> */}
        </div>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);