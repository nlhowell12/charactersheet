import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Switch from '@material-ui/core/Switch';
import { classToggle, addClass, changeClassLevel, adjustClassSkillPoints, removeClassSkillPoints, changeOverallSkillTotal, selectFirstLevelClass } from 'actions';
import { playerClasses }from 'components/classes';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import * as R from 'ramda';


const ClassWrapper = styled(Paper)`
    width: 400px;
    height: 200px;
    overflow: scroll;
`
const ClassInput = styled(Paper)`
    width: 100%;
    display: flex;
    padding-bottom: 5px;
    justify-content: space-around;
`

const LevelInput = styled(TextField)`
    width: 50px; 
    display: flex;
    flexWrap: wrap;
`

class ClassContainer extends Component {

    state = {}

    componentDidMount = () => {
        Object.keys(playerClasses).map(playerClass => {
            return this.setState({
                    ...this.state,
                    [playerClass]: false,
                    first: ''
                    })
        })
    }

    componentDidUpdate = (prevProps) => {
        const { attributes, classes, skillPoints, dispatch } = this.props
        if (attributes.intelligence !== prevProps.attributes.intelligence) {
            Object.keys(classes).map(playerClass => {
                return this.handleSkillPoints(playerClass, classes[playerClass].level)
            })
        }
        if (R.sum(R.values(skillPoints.classes)) !== R.sum(R.values(prevProps.skillPoints.classes))) {
            dispatch(changeOverallSkillTotal(R.sum(R.values(skillPoints.classes))))
        }
    }
    switchToggle = (playerClass) => {
        const { dispatch, classes } = this.props;
        this.setState({
            ...this.state,
            [playerClass]: !this.state[playerClass],
        })
        dispatch(addClass(playerClass))
        if (Object.keys(classes).indexOf(playerClass) > 0) {
            dispatch(removeClassSkillPoints(playerClass))
        }
    }

    handleCheck = (playerClass) => {
        const { classes } = this.props;
        if (!this.state.first) {
            this.setState({
                ...this.state,
                first: playerClass
            }, () => this.handleSkillPoints(playerClass, classes[playerClass].level))
        } else {
        this.setState({
            ...this.state,
            first: ''
        }, () => this.handleSkillPoints(playerClass, classes[playerClass].level))
    }
    }

    handleLevelChange = (playerClass, newLevel) => {
        const { dispatch } = this.props;
        dispatch(changeClassLevel(playerClass, newLevel))
        this.handleSkillPoints(playerClass, newLevel)
    }

    handleSkillPoints = (playerClass, newLevel) => {
        const { dispatch, attributes } = this.props;
        const intMod = attributes.intelligence > 10 ? Math.floor((attributes.intelligence - 10)/2) : Math.floor((attributes.intelligence - 10)/2)
        let classSkillPoints = (playerClasses[playerClass].skillPoints + intMod) * newLevel
        if (playerClass === this.state.first) {
            classSkillPoints = ((playerClasses[playerClass].skillPoints + intMod) * (newLevel - 1)) + ((playerClasses[playerClass].skillPoints + intMod) * 4)
        } 
        dispatch(adjustClassSkillPoints(playerClass, classSkillPoints))
        dispatch(selectFirstLevelClass(playerClass))
    }

    render() {
        const { classes, open, dispatch } = this.props;
        const InputProps = {
            inputProps: {
                style: {
                    textAlign: 'center'
                }
            }
        }
        return (
            <ClassWrapper>
                <div style={{display: 'flex', padding: '5px', justifyContent: 'space-between'}}>
                    <Typography style={{padding: '5px', textDecoration: 'underline'}} variant='headline'>Classes</Typography>
                    <Button variant="contained" color="primary" aria-label="Add" onClick={evt => dispatch(classToggle())}>
                        {"Add Classes"}
                    </Button>
                </div>
                <Dialog open={open} onClose={evt => dispatch(classToggle())}>
                    <DialogTitle>Choose Classes</DialogTitle>
                    {Object.keys(playerClasses).map(playerClass => {
                        return (
                            <FormControlLabel
                                control={<Switch checked={this.state[playerClass]}label={playerClass} key={playerClass + 'Switch'} value={playerClass} onChange={evt => this.switchToggle(playerClass)}/>}
                                label={playerClass}
                                key={playerClass}
                                style={{position: 'relative', left: '30px'}}
                            />
                        )
                    })}
                </Dialog>
                {Object.keys(classes).map(playerClass => {
                    return (
                    <ClassInput key={playerClass + 'input'}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography style={{marginLeft: '10px', fontSize: '20px'}} align='justify'>{playerClass}</Typography>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', justifySelf: 'flex-end', width: '200px'}}>
                        <LevelInput 
                            label="HitDice" 
                            value={playerClasses[playerClass].HD || ''} 
                            style={{position: 'relative', left: '10px'}}
                            InputProps={InputProps}
                            disabled
                        />
                        <LevelInput 
                            label="Skills/level" 
                            value={playerClasses[playerClass].skillPoints || ''} 
                            style={{position: 'relative', left: '10px'}}
                            InputProps={InputProps}
                            disabled
                        />
                        <LevelInput 
                            label="Level" 
                            value={classes[playerClass].level || ''} 
                            style={{position: 'relative', left: '10px'}}
                            InputProps={InputProps}
                            onChange={evt => this.handleLevelChange(playerClass, evt.target.value)}
                            disabled={!this.state.first}
                        />
                        </div>
                        <FormControlLabel
                        control={
                            <Checkbox
                            checked={this.state.first[playerClass]}
                            onChange={evt => this.handleCheck(playerClass)}
                            value={playerClass}
                            disabled={this.state.first !== playerClass && this.state.first ? true : false}
                            />
                        }
                        label="1st"
                        />
                    </ClassInput>
                    )
                })}  
            </ClassWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        classes: state.newChar.classes,
        open: state.ui.classDialog,
        skillPoints: state.newChar.skillPoints,
        attributes: state.newChar.attributes
    }
}
export default connect(mapStateToProps)(ClassContainer)