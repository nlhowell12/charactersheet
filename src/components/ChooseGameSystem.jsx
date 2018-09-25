/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import Paper from '@material-ui/core/Paper'

const gameSystems = ['D&D 3.5', 'D&D 5e', 'D&D Rhedrah'];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title" style={{textDecoration: 'underline'}}>Choose Game System</DialogTitle>
        <div>
          <List>
            {gameSystems.map(gameSystem => (
              <ListItem button onClick={() => this.handleListItemClick(gameSystem)} key={gameSystem}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={gameSystem} />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class SimpleDialogDemo extends React.Component {
  state = {
    open: false,
    selectedValue: gameSystems[0],
  };

  componentDidMount = () => {
    this.setState({
        open: true,
      });
  }

  handleClickOpen = () => {
    this.setState({
        open: true,
      });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    return (
      <Paper style={{width: '200px', position: 'relative', top: '10px', left:'10px'}}>
        <Typography variant="subheading" style={{textAlign: 'center', position: 'relative', top: '10px'}}>Selected: {this.state.selectedValue}</Typography>
        <br />
        <Button onClick={this.handleClickOpen}>Change Game System</Button>
        <SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </Paper>
    );
  }
}

export default SimpleDialogDemo;
