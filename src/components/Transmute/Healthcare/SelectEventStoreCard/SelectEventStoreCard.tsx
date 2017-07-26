import * as React from 'react';

import { Card, CardTitle, CardText } from 'material-ui/Card'


import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem'


import {
    updateSelectedContract,
    createEventStore,
} from '../../../../actions/transmute'

export class SelectEventStoreCard extends React.Component<any, any> {
    state = {
        value: null
    }
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.transmute.selectedContract) {
            this.setState({
                value: nextProps.transmute.selectedContract
            })
        }
    }
    render() {
        return (
            <Card>
                <CardTitle>
                    Event Store
                     <RaisedButton
                        style={{float: 'right'}}
                        label="New Store"
                        secondary={true}
                        onTouchTap={() => {
                            this.props.dispatch(createEventStore(this.props.transmute.defaultAddress))
                        }}
                    />
                     </CardTitle>
                <CardText>
                    <SelectField
                        floatingLabelText="Event Store"
                        value={this.state.value}
                        onChange={(event: any, index: any, value: any) => {
                            this.setState({ value });
                            this.props.dispatch(updateSelectedContract(value, this.props.transmute.defaultAddress));
                        }}
                        style={{ width: '100%' }}
                    >
                        {
                            this.props.transmute.RBACFactory && this.props.transmute.RBACFactory.model && Object.keys(this.props.transmute.RBACFactory.model).map((address: string) => {
                                return (
                                    <MenuItem key={address} value={address} primaryText={address} />
                                )
                            })
                        }
                    </SelectField>
                </CardText>
            </Card>
        );
    }
}

export default connect((state: any) => ({
    transmute: state.transmute
}))(SelectEventStoreCard) as any
