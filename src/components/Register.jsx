import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PaperSheet from 'components/Paper';
import MultipleSelect from 'components/MultipleSelect'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TemporaryDrawer from 'components/TemporaryDrawer'


class Register extends Component {
    state = {
      first_name:'',
      last_name:'',
      username: '',
      email:'',
      password:'',
      campaigns: []
    }

    handleChange = event => {
        this.setState({ campaigns: event.target.value });
      };
    
    handleSubmit = () => {
        // submits user information to the backend API
        console.log("Submitting")
        return
    }

  render() {
      const { campaigns, history } = this.props
    return (
        <React.Fragment>
        <TemporaryDrawer/>
        <MuiThemeProvider>
            <PaperSheet>
            <TextField
                hintText="Enter your First Name"
                floatingLabelText="First Name"
                onChange = {(event,newValue) => this.setState({first_name:newValue})}
                style={{alignSelf: 'center'}}
                />
            <br/>
            <TextField
                hintText="Enter your Last Name"
                floatingLabelText="Last Name"
                onChange = {(event,newValue) => this.setState({last_name:newValue})}
                style={{alignSelf: 'center'}}
                />
            <br/>
            <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange = {(event,newValue) => this.setState({username:newValue})}
                style={{alignSelf: 'center'}}
                />
            <br/>
            <TextField
                hintText="Enter your Email"
                type="email"
                floatingLabelText="Email"
                onChange = {(event,newValue) => this.setState({email:newValue})}
                style={{alignSelf: 'center'}}
                />
            <br/>
            <TextField
                type = "password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange = {(event,newValue) => this.setState({password:newValue})}
                style={{alignSelf: 'center'}}
                />
            <br/>
            <MultipleSelect list={campaigns} selected={this.state.campaigns} onChange={evt => this.handleChange(evt)}></MultipleSelect>
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleSubmit()}/>
            <Typography variant="caption" style={{alignSelf: 'center'}}>Already have an account? <a style={{color: 'blue', cursor: 'pointer'}} onClick={(evt) => history.push('/')}>Log In</a></Typography>
           </PaperSheet>
         </MuiThemeProvider>
         </React.Fragment>
    );
  }
}
const style = {
  margin: 15,
};

const mapStateToProps = (state) => {
    return {
        campaigns: state.user.campaigns
    }
}

export default connect(mapStateToProps)(withRouter(Register));