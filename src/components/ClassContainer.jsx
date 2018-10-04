import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Switch from '@material-ui/core/Switch';
import { classToggle, addClass, changeClassLevel } from 'actions'
import { playerClasses }from 'components/classes';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField';


const ClassWrapper = styled(Paper)`
    width: 375px;
    height: 200px;
    overflow: scroll;
`
const ClassInput = styled(Paper)`
    width: 100%;
    display: flex;
`

const LevelInput = styled(TextField)`
    width: 50px; 
    display: flex;
    flexWrap: wrap;
`

class ClassContainer extends Component {

    state = {

    }

    componentDidMount = () => {
        playerClasses.map(playerClass => {
            return this.setState({
                    ...this.state,
                    [playerClass]: false
                    })
        })
    }

    switchToggle = (playerClass) => {
        const { dispatch } = this.props;
        this.setState({
            ...this.state,
            [playerClass]: !this.state[playerClass]
        })
        dispatch(addClass(playerClass))
    }

    render() {
        const { classes, open, dispatch } = this.props;
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
                    {playerClasses.map(playerClass => {
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
                        <div style={{width: '300px'}}>
                        <Typography style={{marginLeft: '10px'}} align='justify'>{playerClass}</Typography>
                        </div>
                        <LevelInput 
                            label="Level" 
                            value={classes[playerClass]} 
                            style={{position: 'relative', left: '10px'}}
                            onChange={evt => dispatch(changeClassLevel(playerClass, evt.target.value))}
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
        open: state.ui.classDialog
    }
}
export default connect(mapStateToProps)(ClassContainer)