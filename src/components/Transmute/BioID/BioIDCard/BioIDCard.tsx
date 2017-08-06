import * as React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import {
    enroll,
} from '../../../../store/bioid/actions';

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
                              enroll()
                            );
                            {/* createEventStore(this.props.transmute.defaultAddress) */}
                        }}
                    />
                    <RaisedButton
                        label="Verify"
                        onTouchTap={() => {
                            {/* this.props.dispatch(
                            
                            ); */}
                        }}
                    />
                    <RaisedButton
                        label="Identify"
                       
                        onTouchTap={() => {
                            {/* this.props.dispatch(
                               
                            ); */}
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
