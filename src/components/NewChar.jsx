import React, { Component } from 'react';
import SimpleDialogDemo from 'components/ChooseGameSystem';
import TemporaryDrawer from 'components/TemporaryDrawer';
import Attributes from 'components/Attributes';
import CharacterDetails from 'components/CharacterDetails';
import Skills from 'components/Skills';
import styled from 'styled-components';

const NewCharContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
`

class NewChar extends Component {
    render() {
        return (
            <NewCharContainer>
                <TemporaryDrawer/>
                <div>
                    <SimpleDialogDemo/>
                    <Attributes/>
                </div>
                <CharacterDetails/>
                <Skills/>
            </NewCharContainer>
        )
    }
}

export default NewChar