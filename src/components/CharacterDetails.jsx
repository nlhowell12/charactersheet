import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import TextFields from 'components/DetailField';
import SimpleSelect from 'components/SelectField'
import { playerRaces } from 'components/races'
import deities from 'components/deities'

class CharacterDetails extends Component {
    render() {
        const { details, race, deity } = this.props
        return (
            <Paper style={{display: 'flex', flexWrap: 'wrap', position: 'absolute', top: '72px', left: '225px', width: '750px'}}>
                {Object.keys(details).map(detail => {
                    return <TextFields key={detail} detail={detail}/>
                })}
                <SimpleSelect select={playerRaces} value={race} name='race'/>
                <SimpleSelect select={deities} value={deity} name='deity'/>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        details: state.newChar.details,
        race: state.newChar.race,
        deity: state.newChar.deity
    }
}
export default connect(mapStateToProps)(CharacterDetails)