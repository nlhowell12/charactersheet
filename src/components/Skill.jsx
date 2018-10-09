import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { changeSkillRank, changeSkillMisc, changeIndividualSkillTotal } from 'actions';

const SkillInput = styled(TextField)`
    width: 50px; 
    display: flex;
    flexWrap: wrap;
`

class Skill extends Component {

    componentDidMount = () => {
        const { skill, skills, att, attributes, dispatch } = this.props
        const attMod = attributes[att] > 10 ? Math.floor((attributes[att]-10)/2) : Math.floor((attributes[att]-10)/2)
        let newTotal = skills[skill].ranks + skills[skill].misc + attMod
        dispatch(changeIndividualSkillTotal(skill, newTotal))
    }

    componentDidUpdate = (prevProps) => {
        const { skill, skills, att, attributes, dispatch } = this.props
        const attMod = attributes[att] > 10 ? Math.floor((attributes[att]-10)/2) : Math.floor((attributes[att]-10)/2)
        let newTotal = skills[skill].ranks + skills[skill].misc + attMod
        if (this.props.skills[skill].ranks !== prevProps.skills[skill].ranks) {
            dispatch(changeIndividualSkillTotal(skill, newTotal))
        }
        if (this.props.skills[skill].misc !== prevProps.skills[skill].misc) {
            dispatch(changeIndividualSkillTotal(skill, newTotal))
        }
        if (this.props.attributes[att] !== prevProps.attributes[att]) {
            dispatch(changeIndividualSkillTotal(skill, newTotal))
        }
    }
    render() {
        const { skill, skills, att, attributes, dispatch } = this.props
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
                <Typography style={{paddingLeft:'5px', paddingTop: '10px'}}>{skill}</Typography>
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
        attributes: state.newChar.attributes
    }
}

export default connect(mapStateToProps)(Skill)