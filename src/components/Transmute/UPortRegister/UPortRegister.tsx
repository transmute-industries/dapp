
import * as React from 'react';
const { Connect } = require('uport-connect');
let uport = new Connect('TransmuteIndustries');
import RaisedButton from 'material-ui/RaisedButton';
import './UPortRegister.css';
import Paper from 'material-ui/Paper';
const logo = require('../../../images/logo-color.png');

export default class UPortRegister extends React.Component<any, any> {

    login() {
        uport.requestCredentials()
            .then((credentials: any) => {
                console.debug(credentials);
            });
    }

    render() {
        return (
            <Paper zDepth={4} className="md-register" >
                <div className="md-av-c">
                    <img src={logo} width={300} />
                </div>
                <RaisedButton
                    label="Login"
                    secondary={true}
                    onTouchTap={() => {
                        this.login();
                    }}
                />
            </Paper>
        );
    }
}
