import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import SkillInput from 'components/SkillInput';
import MiscSkillInput from 'components/MiscSkillInput';

const SkillContainer = styled(Paper)`
    width: 400px;
    overflow: scroll;
    height: 500px;
`

const SkillPointContainer = styled(Paper)`
    height: 50px;
`

const SkillPointDisplay = styled(Typography)`
`

const SkillsHeader = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;

`

const SkillTitle = styled(Typography)`
    padding-left: 10px;
`

const SmallSkillWrapper = styled(Paper)`
    width: 100%; 
    display: flex; 
    justify-content: space-between;
`

const Display = styled.div`
    width: 40px;
    border: 1px solid lightgray;
    border-radius: 10px;
    height: 85%;
    text-align: center;
`

class Skills extends Component {

    toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    render() {
        const { skills, skillPoints, attributes } = this.props
        return (
            <SkillContainer>
                <SkillsHeader>
                    <SkillTitle variant="display1">
                        Skills
                    </SkillTitle>
                    <SkillPointContainer>
                        <SkillPointDisplay variant="display1">
                            {skillPoints}
                        </SkillPointDisplay>
                    </SkillPointContainer>
                </SkillsHeader>
                <Paper style={{position: 'relative'}}>
                <Paper key='header' style={{width: '100%', height: '30px', display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{display: 'flex'}}>
                        <Display>{"Rank"}</Display>
                        <Display>{"Att"}</Display>
                        <Display>{"Syn"}</Display>
                        <Display>{"Misc"}</Display>
                        <Display>{"Total"}</Display>
                    </div>
                </Paper>
                {Object.keys(skills).map(skill => {
                    if(skill !== 'knowledge' && skill !== 'profession' && skill !== 'perform'  && skill !== 'craft') {
                        return (
                        <SmallSkillWrapper key={skill}>
                            <Typography align='left' variant='body1' style={{paddingLeft: '10px', paddingTop: '5px'}}>
                                {`${this.toTitleCase(skill)} (${skills[skill].att})`}
                            </Typography>
                            <div style={{display: 'flex'}}>
                                <SkillInput skill={skill}/>
                                <Display>{attributes[skills[skill].att] > 10 ? `+${Math.floor((attributes[skills[skill].att]-10)/2)}` : `${Math.floor((attributes[skills[skill].att]-10)/2)}`}</Display>
                                <Display>{skills[skill].synBonus || null}</Display>
                                <MiscSkillInput/>
                                <Display>{skills[skill].total}</Display>
                            </div>
                        </SmallSkillWrapper>
                        )
                    } else if (skill === 'knowledge') {
                        return (
                            <Paper key={skill} style={{width: '100%'}}>
                            <Typography align='left' variant='body1' style={{paddingLeft: '10px', paddingTop: '5px'}}>
                                {`Knowledge (${skills.knowledge.att})`}
                            </Typography>
                                {Object.keys(skills.knowledge).map(skill => {
                                    if(skill !== 'att') {
                                    return(
                                        <SmallSkillWrapper key={skill}>
                                            <Typography align='left' variant='body1' style={{paddingLeft: '30px', paddingTop: '5px'}}>
                                                {`${this.toTitleCase(skill)}`}
                                            </Typography>
                                            <div style={{display: 'flex'}}>
                                                <SkillInput skill={skill}/>
                                                <Display>{attributes[skills['knowledge'].att] > 10 ? `+${Math.floor((attributes[skills['knowledge'].att]-10)/2)}` : `${Math.floor((attributes[skills['knowledge'].att]-10)/2)}`}</Display>
                                                <Display>{skills.knowledge[skill].synBonus || null}</Display>
                                                <MiscSkillInput/>
                                                <Display>{skills.knowledge[skill].total}</Display>
                                            </div>
                                        </SmallSkillWrapper>
                                    )} else {
                                        return null
                                }})}
                            </Paper>
                        )
                    } else {
                        return (
                            <Paper key={skill} style={{width: '100%'}}>
                            <Typography align='left' variant='body1' style={{paddingLeft: '10px', paddingTop: '5px'}}>
                                {`${this.toTitleCase(skill)} (${skills[skill].att})`}
                            </Typography>
                            </Paper>
                        )
                    }
                })}
                </Paper>
            </SkillContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        skills: state.newChar.skills,
        skillPoints: state.newChar.skillPoints,
        attributes: state.newChar.attributes
    }
}

export default connect(mapStateToProps)(Skills)