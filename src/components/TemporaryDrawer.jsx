import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import UserCard from 'components/UserCard'
import { connect } from 'react-redux'
import { drawerToggle } from 'actions';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import { withRouter } from 'react-router-dom'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes, left, dispatch, username, history } = this.props;

    const sideList = (
      <div className={classes.list}>
        <UserCard/>
        {/* Displays sidebar if there is a username in state */}
        {username ? 
        <List>
          <ListItem button onClick={() => history.push('/create')}>
          <ListItemText primary="Create New Character" />
          </ListItem>
          <ListItem button >
          <ListItemText primary="Spells/Powers" />
          </ListItem>
          <ListItem button >
          <ListItemText primary="Equipment" />
          </ListItem>
          <ListItem button >
          <ListItemText primary="Feats" />
          </ListItem>
        </List> : null}
        <Divider />
        <List>
        <a href="mailto:nlhowell12@gmail.com,robcgabbard@gmail.com?subject=Issue with Character Sheet" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon/>
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </a>
        </List>
      </div>
    );

    return (
      <div>
        <Drawer open={left} onClose={evt => dispatch(drawerToggle())}>
          <div
            tabIndex={0}
            role="button"
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        left: state.ui.leftNav,
        username: state.user.username
    }
}
export default connect(mapStateToProps)(withRouter(withStyles(styles)(TemporaryDrawer)));