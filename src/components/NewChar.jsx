import React, { Component } from 'react';
import SimpleDialogDemo from 'components/ChooseGameSystem';
import TemporaryDrawer from 'components/TemporaryDrawer';
import Attributes from 'components/Attributes';
import CharacterDetails from 'components/CharacterDetails';

class NewChar extends Component {
    render() {
        return (
            <div>
                <TemporaryDrawer/>
                <SimpleDialogDemo/>
                <Attributes/>
                <CharacterDetails/>
            </div>
        )
    }
}

export default NewChar