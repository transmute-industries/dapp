import * as React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import {
    // createEventStore,
    UNSAFE_updateLightWallet
} from '../../../../actions/transmute';

import TextField from 'material-ui/TextField';

import {
    generateMnemonic,
    getDefaultAddressFromMnemonic
} from './LightWalletAPI'

export class LightWalletCard extends React.Component<any, any> {
    state = {
        lightWalletMnemonic: '',
        lightWalletAddress: ''
    };
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.transmute.lightWalletMnemonic) {
            this.setState({
                lightWalletMnemonic: nextProps.transmute.lightWalletMnemonic,
                lightWalletAddress: nextProps.transmute.lightWalletAddress,
            });
        }
    }
    render() {
        return (
            <Card style={{ marginBottom: '32px' }}>
                <CardTitle>
                    Wallet
                    <RaisedButton
                        style={{ float: 'right' }}
                        label="New Wallet"
                        secondary={true}
                        onTouchTap={() => {
                            let lightWalletMnemonic = generateMnemonic();
                            let lightWalletAddress = getDefaultAddressFromMnemonic(lightWalletMnemonic);
                            this.props.dispatch(
                                UNSAFE_updateLightWallet({
                                    lightWalletMnemonic,
                                    lightWalletAddress
                                })
                            );
                        }}
                    />
                </CardTitle>
                <CardText>
                    <TextField
                        style={{ width: '100%' }}
                        hintText="Very unsafe demo"
                        floatingLabelText="Mnemonic"
                        multiLine={true}
                        value={this.state.lightWalletMnemonic}
                        disabled
                    />

                    <TextField
                        style={{ width: '100%' }}
                        hintText="Very unsafe demo"
                        floatingLabelText="Address"
                        multiLine={true}
                        value={this.state.lightWalletAddress}
                        disabled
                    />

                </CardText>
                <CardActions>
                </CardActions>
            </Card>
        );
    }
}

export default connect((state: any) => ({
    transmute: state.transmute
}))(LightWalletCard) as any;
