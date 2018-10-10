import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Skill from 'components/Skill';
import Typography from '@material-ui/core/Typography'
import * as R from 'ramda';

const SkillsContainer = styled(Paper)`
    width: 400px;
    height: 400px;
    overflow: scroll;
`

const SkillHeader  = styled(Paper)`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
`

const SkillPointDisplay = styled(Paper)`
    height: 85%;
    width: 50px;
    font-size: 27px;
    text-align: center;
`
class Skills extends Component {
    render() {
        const { skills, skillPoints } = this.props;
        const nestedSkills = ['knowledge', 'profession', 'perform', 'craft', 'speak language']
        const skillPointTotal = R.sum(R.values(skillPoints.classes));
        return (
            <SkillsContainer>
                <SkillHeader>
                    <Typography variant="headline">Skills</Typography>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '180px'}}>
                    <Typography variant="headline">Skill Points: </Typography>
                    <SkillPointDisplay>{skillPointTotal}</SkillPointDisplay>
                    </div>
                </SkillHeader>
                {Object.keys(skills).map(skill => {
                    if (nestedSkills.indexOf(skill) >= 0) {
                        return null
                    }
                    else {
                        return <Skill key={skill} skill={skill} att={skills[skill].att}/>
                    }
                })}
            </SkillsContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        skills: state.newChar.skills,
        attributes: state.newChar.attributes,
        skillPoints: state.newChar.skillPoints
    }
}

export default connect(mapStateToProps)(Skills)