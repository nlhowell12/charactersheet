import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PaperSheet from 'components/Paper';
import CheckBox from 'components/CheckBox'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Register extends Component {
    state = {
      first_name:'',
      last_name:'',
      username: '',
      email:'',
      password:'',
      campaigns: []
    }
  
    handleCheck = (campaignName) => {
        const { campaigns } = this.state;
        if(campaigns.indexOf(campaignName) >= 0) {
            campaigns.pop(campaigns.indexOf(campaignName))
            this.setState({
                ...this.state,
                campaigns
            })
        } else {
            this.setState({
                ...this.state,
                campaigns: [
                    ...this.state.campaigns,
                    campaignName
                ]
            })
        }
        
    }
  render() {
      const { campaigns } = this.props
    return (
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
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </PaperSheet>
           <PaperSheet>
               {campaigns.map(campaign => {
                  return <CheckBox key={campaign.campaignName} name={campaign.campaignName} onChange={evt => this.handleCheck(campaign.campaignName)}></CheckBox> 
               })}
           </PaperSheet>
         </MuiThemeProvider>
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