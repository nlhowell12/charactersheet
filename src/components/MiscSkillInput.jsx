import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const RankInput = styled.input`
    width: 35px;
    border: 1px solid lightgray;
    border-radius: 10px;
    height: 85%;
    text-align: center;
`

class SkillInput extends Component {
    render() {
        return (
            <React.Fragment>
                <RankInput placeholder="Misc"/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    skills: state.newChar.skills        
    }
}

export default connect(mapStateToProps)(SkillInput)