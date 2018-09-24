import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { logout } from 'actions'
import { withRouter } from 'react-router-dom';


const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class UserCard extends Component {

  logout = () => {
    const { dispatch, history } = this.props
    dispatch(logout())
    history.push('/')
  }
  render() {
    const { classes, username, campaigns } = this.props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {username ? 'Log In Successful!' : "You are not logged in."}
        </Typography>
        <Typography variant="headline" component="h2">
          {username}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {username ? "Active Campaigns" : null}
        </Typography>
        {username ? campaigns.map(campaign => {
          return <Typography key={campaign.campaignName}>{`${campaign.campaignName} (${campaign.system})`}</Typography>
        }) : null}
      </CardContent>
      <CardActions>
        {username ? <Button size="small" onClick={evt => this.logout()}>Logout</Button> : null}
      </CardActions>
    </Card>
  );
}
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    campaigns: state.user.campaigns
  }
}

export default connect(mapStateToProps)(withRouter(withStyles(styles)(UserCard)));
