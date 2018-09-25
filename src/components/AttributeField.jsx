import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { changeAttribute } from 'actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class OutlinedTextFields extends React.Component {

  render() {
    const { classes, attribute, attributes, dispatch } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label={attribute}
          className={classes.textField}
          value={attributes[attribute]}
          onChange={(evt) => dispatch(changeAttribute(attribute, evt.target.value))}
          margin="normal"
          variant="outlined"
          style={{width: '50px', position: 'relative', left: '10px', textAlign: 'center'}}
        />
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    attributes: state.newChar.attributes
  }
}

export default connect(mapStateToProps)(withStyles(styles)(OutlinedTextFields));
