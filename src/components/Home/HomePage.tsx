import * as React from 'react';

import { Particle } from '../Common/Particle/Particle'

import './HomePage.css';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider, lightBaseTheme } from 'material-ui/styles';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

import RaisedButton from 'material-ui/RaisedButton';

// import { Button } from 'reactstrap';

import { push } from 'react-router-redux'

import { store } from '../../store/store';

const logo = require('../../images/logo-white.png')

export default class HomePage extends React.Component<any, any> {
    launchDemo(path: string) {
        console.log(path)
        store.dispatch(push(path))
    }
    render() {
        return (
            <Particle>
                <div className='logo-c'>
                    <img className='logo' src={logo} />
                </div>
                <div className='cta-c'>
                    <div className='cta'>
                        <h4>Ethereum dApp</h4>
                        <div className='btn-c'>
                            {/* <div className='bootstrap-btn'>
                                <Button style={{ cursor: 'pointer' }} color='info'
                                    onClick={() => {
                                        this.launchDemo('/web-app-starter-kit/bootstrap');
                                    }}
                                >Bootstrap</Button>
                            </div> */}
                            <div className='material-btn'>
                                <MuiThemeProvider muiTheme={lightMuiTheme}>
                                    <RaisedButton secondary label="Demo" onTouchTap={() => {
                                        this.launchDemo('/web-app-starter-kit/healthcare');
                                    }} />
                                </MuiThemeProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </Particle>
        );
    }
}
