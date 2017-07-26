import * as React from 'react';

import './Web3Settings.css';

import Paper from 'material-ui/Paper';

import SettingsForm from './SettingsForm/SettingsForm'

export default class Web3Settings extends React.Component<any, any> {
  render() {
    return (
      <div className='web3-settings'>

            <Paper zDepth={4} >
              <div style={{textAlign: 'center'}}>
                <h1>Web3</h1>
                Web3 is used to talk to the Ethereum Blockchain.
              </div>
              <div style={{ padding: '16px' }}>
                <SettingsForm  />
              </div>
            </Paper>
      </div>
    );
  }
}

