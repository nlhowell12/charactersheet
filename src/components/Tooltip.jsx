import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    title: {
      color: theme.palette.primary.light,
    },
  });

class TriggersTooltips extends React.Component {
  state = {
    open: false,
  };

  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };

  render() {
      const { characterInfo } = this.props
      const playerClass = characterInfo.class
      const level = characterInfo.level

    return (
      <div>
        <Grid container justify="center">
          <Grid item>
            <Tooltip disableFocusListener disableTouchListener title={`${playerClass} ${level}`}>
            <IconButton>
                <InfoIcon color='primary'>

                </InfoIcon>
            </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </div>
    );
  }
}

TriggersTooltips.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(TriggersTooltips);
