import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class MultipleSelect extends React.Component {
  state = {
    name: [],
  };

  render() {
    const { classes, theme, list, selected } = this.props;

    return (
      <div className={classes.root} style={{alignSelf: 'center', position: 'relative', bottom: '15px'}}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-chip">Campaigns</InputLabel>
          <Select
            multiple
            value={selected}
            onChange={this.props.onChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {list.map(campaign => (
              <MenuItem
                key={campaign.campaignName}
                value={campaign.campaignName}
                style={{
                  fontWeight:
                    this.state.name.indexOf(campaign.campaignName) === -1
                      ? theme.typography.fontWeightRegular
                      : theme.typography.fontWeightMedium,
                }}
              >
                {`${campaign.campaignName} (${campaign.system})`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MultipleSelect);
