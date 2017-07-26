import * as React from 'react';

import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
// import { RadioButton } from 'material-ui/RadioButton'
import MenuItem from 'material-ui/MenuItem'
// import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
    //   AutoComplete,
    //   Checkbox,
    //   DatePicker,
    //   TimePicker,
    //   RadioButtonGroup,
    SelectField,
    //   Slider,
    // TextField,
    //   Toggle
} from 'redux-form-material-ui'


import RaisedButton from 'material-ui/RaisedButton';

import { store } from '../../../../store/store';

import { updateWeb3Settings } from '../../../../actions/transmute'


export class FormComponent extends React.Component<any, any> {
    //   componentDidMount() {
    //     this.refs.name // the Field
    //       .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
    //       .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
    //       .focus() // on TextField
    //   }

    render() {

        return (
            <form >
                <Field style={{ width: '100%' }} name='provider' component={SelectField} hintText='Select a provider'>
                    <MenuItem value='testrpc' primaryText='Test RPC' />
                    <MenuItem value='metamask' primaryText='MetaMask' />
                    <MenuItem value='infura' primaryText='Infura' />
                    <MenuItem value='parity' primaryText='Parity' />
                </Field>
                {/* <code>
                    {JSON.stringify(this.props.transmute)}
                </code> */}

                <Field style={{ width: '100%' }} name='defaultAddress' component={SelectField} hintText='Select a default address'>
                    {
                        this.props.transmute.addresses && this.props.transmute.addresses.map((address: string) => {
                            return (
                                <MenuItem key={address} value={address} primaryText={address} />
                            )
                        })
                    }
                </Field>

                <RaisedButton secondary label="Save" onTouchTap={async () => {
                    this.props.handleSubmit()
                }} />
            </form>
        )
    }
}

const form = reduxForm({
    form: 'example',
    enableReinitialization: true
})(FormComponent)

export default connect(
    ({ transmute }) => ({
        transmute: transmute,
        initialValues: {
            defaultAddress: transmute.defaultAddress,
            provider: transmute.provider,
        },
        onSubmit: (data: any) => {
            // console.log(data)
            store.dispatch(updateWeb3Settings(data))
        }
    }),
)(form) as any

