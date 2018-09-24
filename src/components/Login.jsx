import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PaperSheet from 'components/Paper';
import { withRouter } from 'react-router-dom';

class Login extends Component {

  state = {
    username:'',
    password:''
  }


  handleClick = () => {
    // 
    // This will fetch the backend API to validate the username and password
    // 
    return
  }

render() {
  const { history } = this.props
    return (
        <MuiThemeProvider>
          <PaperSheet>
            <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange = {(event,newValue) => this.setState({username:newValue})}
                style={{alignSelf: 'center'}}
                />
            <br/>
                <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange = {(event,newValue) => this.setState({password:newValue})}
                style={{alignSelf: 'center'}}
                />
                <br/>
                <RaisedButton label="Login" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                <RaisedButton label="Register" primary={true} style={style} onClick={(event) => history.push("/register")}/>
            </PaperSheet>
         </MuiThemeProvider>
    );
  }
}
const style = {
 margin: 15,
};
export default withRouter(Login);