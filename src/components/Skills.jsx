import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Skill from 'components/Skill';

const SkillsContainer = styled(Paper)`
    width: 400px;
    height: 400px;
    overflow: scroll;
`
class Skills extends Component {
    render() {
        const { skills } = this.props;

        return (
            <SkillsContainer>
                {Object.keys(skills).map(skill => {
                    return <Skill key={skill} skill={skill} att={skills[skill].att}/>
                })}
            </SkillsContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        skills: state.newChar.skills,
        attributes: state.newChar.attributes
    }
}

export default connect(mapStateToProps)(Skills)