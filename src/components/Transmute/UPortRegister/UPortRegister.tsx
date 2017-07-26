
// import { Connect } from 'uport-connect'

const { Connect } = require('uport-connect');

// var { Connect } = require('uport-connect')

let uport = new Connect('TransmuteIndustries')

import * as React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import './UPortRegister.css';
import Paper from 'material-ui/Paper';


const logo = require('../../../images/logo-color.png')

export default class UPortRegister extends React.Component<any, any> {

    login() {
        uport.requestCredentials()
            .then((credentials: any) => {
                console.log(credentials)
            })

        // let web3 = uport.getWeb3()

        // web3.eth.getAccounts((error: any, accounts: any) => {
        //     console.log(accounts)
        // })
    }

    render() {
        return (
            <Paper zDepth={4} className='md-register' >
                <div className='md-av-c'>
                    <img src={logo} width={300} />
                </div>
                <RaisedButton label="Login" secondary onTouchTap={() => {
                    this.login();
                }} />
            </Paper>
        );
    }
}
