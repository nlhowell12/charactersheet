import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import SimpleCard from './SimpleCard.jsx'
import { mailFolderListItems, otherMailFolderListItems } from './drawerTileData.jsx';
import { connect } from 'react-redux'
import { drawerToggle } from '../actions';

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
    const { classes, left, dispatch } = this.props;

    const sideList = (
      <div className={classes.list}>
        <SimpleCard></SimpleCard>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
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
        left: state.ui.leftNav
    }
}
export default connect(mapStateToProps)(withStyles(styles)(TemporaryDrawer));