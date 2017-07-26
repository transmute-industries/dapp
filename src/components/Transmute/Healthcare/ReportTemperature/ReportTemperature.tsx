import * as React from 'react';
import TextField from 'material-ui/TextField';

export default class TemperatureTextField extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  render() {
    return (
      <div>
        <TextField
          id="temp-text-field-controlled"
          value={this.state.value}
          onChange={(event: any) => {
            this.setState({
              value: event.target.value,
            });
            this.props.onChange(event.target.value)
          }}
        />
      </div>
    );
  }
}