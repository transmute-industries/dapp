import * as React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import {
    createEventStore,
} from '../../../../actions/transmute';

export class BioIDCard extends React.Component<any, any> {
    state = {
        value: null
    };
    componentWillReceiveProps(nextProps: any) {
        // if (nextProps.transmute.selectedContract) {
        //     this.setState({
        //         value: nextProps.transmute.selectedContract
        //     });
        // }
    }
    render() {
        return (
            <Card style={{marginTop: '32px', marginBottom: '32px'}}>
                <CardTitle>
                    BioID
                </CardTitle>
                <CardText>
                    Current status here...
                </CardText>
                <CardActions>
                    <RaisedButton
                        label="Enroll"
                        onTouchTap={() => {
                            this.props.dispatch(
                                createEventStore(this.props.transmute.defaultAddress)
                            );
                        }}
                    />
                    <RaisedButton
                        label="Verify"
                        onTouchTap={() => {
                            this.props.dispatch(
                                createEventStore(this.props.transmute.defaultAddress)
                            );
                        }}
                    />
                    <RaisedButton
                        label="Identify"
                       
                        onTouchTap={() => {
                            this.props.dispatch(
                                createEventStore(this.props.transmute.defaultAddress)
                            );
                        }}
                    />
                </CardActions>
            </Card>
        );
    }
}

export default connect((state: any) => ({
    transmute: state.transmute
}))(BioIDCard) as any;
