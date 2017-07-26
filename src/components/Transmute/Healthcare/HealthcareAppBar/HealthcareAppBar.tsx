import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';

import { connect } from 'react-redux'

import { push } from 'react-router-redux'

import { store } from '../../../../store/store';

class Login extends React.Component {
  static muiName = 'FlatButton';
  render() {
    return (
      <FlatButton {...this.props} label="Login" onTouchTap={() => {
      store.dispatch(push('/web-app-starter-kit/uport'))
    }}  />
    );
  }
}
const Logged: any = (props: any) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Sign out" onTouchTap={() => {
      store.dispatch(push('/web-app-starter-kit/uport'))
    }} />
  </IconMenu>
);

Logged.muiName = 'IconMenu';
class HealthcareAppBar extends React.Component<any, any> {
  state = {
    logged: true,
    open: false,
    isSelectEventStoreDialogOpen: false
  };
  handleChange = (event: any, logged: any) => {
    this.setState({ logged: logged });
  };
  handleToggle = () => this.setState({ open: !this.state.open });

  handleTitleTouch = () => {

  }
  render() {
    return (
      <div>
        <AppBar
          title="Ether Care"
          onTitleTouchTap={this.handleTitleTouch}
          iconElementLeft={<IconButton onTouchTap={this.handleToggle}><Menu /></IconButton>}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({ open })}>
          <MenuItem onTouchTap={() => {
            store.dispatch(push('/web-app-starter-kit/'))
          }}>Home</MenuItem>
          <MenuItem onTouchTap={() => {
            store.dispatch(push('/web-app-starter-kit/web3'))
          }}>Web3</MenuItem>
          <Toggle
            label="Fake Login"
            defaultToggled={true}
            onToggle={this.handleChange}
            labelPosition="right"
            style={{ margin: 20 }}
          />

        </Drawer>
      </div>
    );
  }
}

export default connect((state: any) => ({
  transmute: state.transmute
}))(HealthcareAppBar)
