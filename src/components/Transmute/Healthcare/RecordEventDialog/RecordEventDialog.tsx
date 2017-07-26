import * as React from 'react';
import * as moment from 'moment'

import Dialog from 'material-ui/Dialog';

import FlatButton from 'material-ui/FlatButton';

import { connect } from 'react-redux';

import {
    //   readAllContractEvents,
    writeFSA
} from '../../../../actions/transmute'

import SelectSymptoms from '../SelectSymptoms/SelectSymptoms'
import ReportTemperature from '../ReportTemperature/ReportTemperature'

const getPayload = (state: any) => {
    return state.dialogTitle === 'New Symptoms' ? state.symptoms : parseFloat(state.temperature)
}

export class RecordEventDialog extends React.Component<any, any> {
    state = {
        dialogTitle: 'non',
        dialogBody: <pre></pre>,
        dialogActions: [],
        open: false,
        symptoms: [],
        temperature: '98.7'
    }
    handleOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.props.dispatch({
            type: 'RECORD_EVENT_DIALOG_UPDATE',
            payload: {}
        })
        this.setState({ open: false });
    };
    componentWillReceiveProps(nextProps: any) {
        // console.log('maybe props...', nextProps)
        if (nextProps.transmute &&
            nextProps.transmute.activeDialog &&
            nextProps.transmute.activeDialog.type
        ) {
            let recordDialogData: any;

            switch (nextProps.transmute.activeDialog.type) {
                case 'SYMPTOMS': recordDialogData = {
                    title: 'New Symptoms',
                    payloadType: 'SYMPTOMS_REPORTED',
                    el: <SelectSymptoms values={this.state.symptoms}
                        onChange={(data: any) => {
                            this.setState({
                                symptoms: data
                            })
                        }} style={{ width: '100%' }} />
                }; break;

                case 'TEMPERATURE': recordDialogData = {
                    title: 'New Temperature',
                    payloadType: 'TEMPERATURE_REPORTED',
                    el: < ReportTemperature
                        value={this.state.temperature}
                        onChange={(data: any) => {
                            this.setState({
                                temperature: data
                            })
                        }} style={{ width: '100%' }} />
                }; break;
            }

            this.setState({
                open: true,
                dialogTitle: recordDialogData.title,
                dialogBody: recordDialogData.el,
                dialogPayloadType: recordDialogData.payloadType,
                dialogActions: [
                    <FlatButton
                        label="Cancel"
                        primary={true}
                        onTouchTap={this.handleClose}
                    />,
                    <FlatButton
                        label="Submit"
                        primary={true}
                        keyboardFocused={true}
                        onTouchTap={() => {
                            let fsa: any = {
                                type: recordDialogData.payloadType,
                                payload: {
                                    created: moment().format('LLL'),
                                    data: getPayload(this.state)
                                }
                            }
                            this.props.dispatch(writeFSA(this.props.transmute.selectedContract, this.props.transmute.defaultAddress, fsa))
                            this.handleClose()
                        }}
                    />
                ]
            })
        }
    }

    render() {
        return (
            <div>
                <Dialog
                    title={this.state.dialogTitle}
                    actions={this.state.dialogActions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    {this.state.dialogBody}
                </Dialog>
            </div>
        );
    }
}

export default connect((state: any) => ({
    transmute: state.transmute
}))(RecordEventDialog)
