import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { changeSkillRank } from 'actions'

const RankInput = styled.input`
width: 40px;
border: 1px solid lightgray;
border-radius: 10px;
height: 85%;
text-align: center;
`

class SkillInput extends Component {
    render() {
        const { dispatch, skill, skills } = this.props;
        if (skill in skills.knowledge) {
            return (
                <React.Fragment>
                    <RankInput value={skills.knowledge[skill].ranks} placeholder="Ranks" onChange={evt => dispatch(changeSkillRank(skill, evt.target.value))}/>
                </React.Fragment>
                )
        } else if (skill in skills.perform) {
            return ( 
                <React.Fragment>
                    <RankInput value={skills.perform[skill].ranks} placeholder="Ranks" onChange={evt => dispatch(changeSkillRank(skill, evt.target.value))}/>
                </React.Fragment>
                )
        } else if (skill in skills.profession) {
            return (
                <React.Fragment>
                    <RankInput value={skills.profession[skill].ranks} placeholder="Ranks" onChange={evt => dispatch(changeSkillRank(skill, evt.target.value))}/>
                </React.Fragment>
                )
        } else if (skill in skills.craft) {
            return (
                <React.Fragment>
                    <RankInput value={skills.craft[skill].ranks} placeholder="Ranks" onChange={evt => dispatch(changeSkillRank(skill, evt.target.value))}/>
                </React.Fragment>
                )
        } else {
            return (
                <React.Fragment>
                    <RankInput value={skills[skill].ranks} placeholder="Ranks" onChange={evt => dispatch(changeSkillRank(skill, evt.target.value))}/>
                </React.Fragment>
                )
        }
    }
}
                
const mapStateToProps = (state) => {
    return {
        skills: state.newChar.skills        
    }
}

export default connect(mapStateToProps)(SkillInput)