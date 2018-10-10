import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { changeSkillRank, changeSkillMisc, changeIndividualSkillTotal, setSkillCost } from 'actions';
import { playerClasses } from 'components/classes'

const SkillInput = styled(TextField)`
    width: 50px; 
    display: flex;
    flexWrap: wrap;
`

class Skill extends Component {

    state = {
        classSkillClasses: []
    }

    componentDidMount = () => {
        const { skill, skills, att, attributes, dispatch } = this.props
        const attMod = attributes[att] > 10 ? Math.floor((attributes[att]-10)/2) : Math.floor((attributes[att]-10)/2)
        let newTotal = skills[skill].ranks + skills[skill].misc + attMod
        dispatch(changeIndividualSkillTotal(skill, newTotal))
    }

    componentDidUpdate = (prevProps) => {
        const { skill, skills, att, attributes, dispatch, classes } = this.props
        const { classSkillClasses } = this.state;
        const attMod = attributes[att] > 10 ? Math.floor((attributes[att]-10)/2) : Math.floor((attributes[att]-10)/2)
        let newTotal = skills[skill].ranks + skills[skill].misc + attMod;
        if (skills[skill].ranks !== prevProps.skills[skill].ranks) {
            dispatch(changeIndividualSkillTotal(skill, newTotal))
        }
        if (skills[skill].misc !== prevProps.skills[skill].misc) {
            dispatch(changeIndividualSkillTotal(skill, newTotal))
        }
        if (attributes[att] !== prevProps.attributes[att]) {
            dispatch(changeIndividualSkillTotal(skill, newTotal))
        }
        if (classes !== prevProps.classes) {
            for (let playerClass in playerClasses) {
                if (classes[playerClass] && playerClasses[playerClass].classSkills.indexOf(skill) >= 0 && classSkillClasses.indexOf(playerClass) === -1) {
                    this.setState({
                        ...this.state,
                        classSkillClasses: [
                            ...this.state.classSkillClasses,
                            playerClass
                        ]
                    })
                }
            }
        }
    }

    render() {
        const { skill, skills, att, attributes, dispatch } = this.props;
        const { classSkillClasses } = this.state;
        const inputProps = {
            style: {
                textAlign: 'center'
            }
        }
        const InputProps = {
            disableUnderline: true,
            inputProps
        }
        const attMod = attributes[att] > 10 ? Math.floor((attributes[att]-10)/2) : Math.floor((attributes[att]-10)/2)

        return (
            <Paper style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <Typography style={{paddingLeft:'5px', paddingTop: '10px'}}>{skill}</Typography>
                    {classSkillClasses.length > 0 ? <Typography style={{paddingLeft:'5px', fontSize: '10px'}}>{`Class Skill: ${classSkillClasses.join(",")}`}</Typography> :  null}
                </div>
                <div style={{display:'flex', justifyContent: 'space-around'}}>
                    <SkillInput label="Ranks" value={skills[skill].ranks || ''} InputProps={InputProps} onChange={evt => dispatch(changeSkillRank(skill, evt.target.value))}/>
                    <SkillInput label="Att" disabled InputProps={InputProps} value={attMod}/>
                    <SkillInput label="Misc" InputProps={InputProps} onChange={evt => dispatch(changeSkillMisc(skill, evt.target.value))}/>
                    <SkillInput label="Total" disabled InputProps={InputProps} value={skills[skill].total || ''}/>
                </div>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        skills: state.newChar.skills,
        attributes: state.newChar.attributes,
        classes: state.newChar.classes,
        skillPoints: state.newChar.skillPoints
    }
}

export default connect(mapStateToProps)(Skill)