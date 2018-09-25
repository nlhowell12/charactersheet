import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import PaperSheet from 'components/CampaignDisplayWrapper'
import TriggersTooltips from 'components/Tooltip'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: '200px',
    width: '95%'
  },
  GridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    width: '95%'
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
class SingleLineGridList extends Component {
  render() {
    const { classes, characters, name, system, DM } = this.props;
  return (
    <PaperSheet style={{width: '900px', margin: 'auto'}}>
    <div className={classes.root}>
      <GridList className={classes.GridList} cols={2.5}>
        <GridListTile key="Subheader" cols={2} style={{ width: '250px'}}>
          <ListSubheader component="div" style={{width: '250px'}}>{`${name} (${system})`}</ListSubheader>
          <ListSubheader component="div" style={{width: '250px'}}>{`DM: ${DM}`}</ListSubheader>
        </GridListTile>
        {characters.map(character => (
          <GridListTile key={character.name} style={{width: '180px', height: '200px', paddingTop: '10px', paddingBottom: '10px'}}>
            <img src={character.img} alt={character.name} />
            <GridListTileBar
              title={character.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <TriggersTooltips characterInfo={character}/>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </PaperSheet>
  );
}
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
