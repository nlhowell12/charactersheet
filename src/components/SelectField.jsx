import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { changeTopLevel } from 'actions';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  render() {
    const { classes, value, select, name, dispatch } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel>{name}</InputLabel>
          <Select
            value={value}
            onChange={evt => dispatch(changeTopLevel(name, evt.target.value))}
          >
          {name === 'race' ? 
          select.map(selection => {
              return <MenuItem key={selection.race} value={selection.race}>{selection.race}</MenuItem>
          }) :
          select.map(selection => {
            return <MenuItem key={selection} value={selection}>{selection}</MenuItem>})}
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(SimpleSelect));
