import * as React from 'react';

import { Card, CardTitle, CardText } from 'material-ui/Card'

import { connect } from 'react-redux'

export class PatientSummaryCard extends React.Component<any, any> {

    render() {
        return (
            <Card style={{marginTop: '16px', marginBottom: '16px'}}>
                <CardTitle>
                    Read Model
                </CardTitle>
                <CardText>
                    <pre>
                        {JSON.stringify(this.props.transmute.patientSummary, null, 2)}
                    </pre>
                </CardText>
            </Card>
        );
    }

}

export default connect((state: any) => ({
    transmute: state.transmute
}))(PatientSummaryCard) as any;
