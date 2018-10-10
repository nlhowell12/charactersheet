import { CHANGE_CLASS_LEVEL, CHANGE_ATTRIBUTE, CHANGE_DETAIL, CHANGE_TOP_LEVEL, CHANGE_SKILL_RANK, CHANGE_SKILL_MISC, CHANGE_INDIVIDUAL_SKILL_TOTAL, ADD_CLASS, ADJUST_CLASS_SKILL_POINTS, SELECT_FIRST_LEVEL_CLASS, REMOVE_CLASS_SKILL_POINTS, CHANGE_OVERALL_SKILL_TOTAL, SET_SKILL_COST } from 'actions'
import * as R from 'ramda'
import skills from 'components/skillsReference'

const newCharState = {
    player: '',
    classes: {},
    xp: 0,
    race: '',
    deity: '',
    skillPoints: {
        classes: {

        },
        used: 0,
        first: ''
    },
    details: {
        name: '',
        age: '',
        eyes: '',
        hair: '',
        skin: '',
    },
    attributes: {
        strength: 12,
        dexterity: 13,
        constitution: 15,
        intelligence: 18,
        wisdom: 16,
        charisma: 14
    },
    skills: skills,
    feats: []
}

export default (state = newCharState, action) => {
    switch(action.type) {
        case CHANGE_ATTRIBUTE: 
            let value = Number(action.value)
            return R.set(R.lensPath(['attributes', action.attribute]), value, state)
        case CHANGE_DETAIL:
            return R.set(R.lensPath(['details', action.detail]), action.value, state)
        case CHANGE_TOP_LEVEL:
            return R.set(R.lensPath([action.change]), action.value, state)
        case CHANGE_SKILL_RANK:
            let skillPath = []
            if (action.skill in state.skills.knowledge) {
                skillPath = ['skills', 'knowledge', action.skill, 'ranks']
            } else if (action.skill in state.skills.profession) {
                skillPath = ['skills', 'profession', action.skill, 'ranks']
            } else if (action.skill in state.skills.perform) {
                skillPath = ['skills', 'perform', action.skill, 'ranks']
            } else if (action.skill in state.skills.craft) {
                skillPath = ['skills', 'craft', action.skill, 'ranks']
            } else {
                skillPath = ['skills', action.skill, 'ranks']
            }
            return (R.set(R.lensPath(skillPath), Number(action.rank), state))
        case CHANGE_SKILL_MISC:
            let miscSkillPath = []
            if (action.skill in state.skills.knowledge) {
                miscSkillPath = ['skills', 'knowledge', action.skill, 'misc']
            } else if (action.skill in state.skills.profession) {
                miscSkillPath = ['skills', 'profession', action.skill, 'misc']
            } else if (action.skill in state.skills.perform) {
                miscSkillPath = ['skills', 'perform', action.skill, 'misc']
            } else if (action.skill in state.skills.craft) {
                miscSkillPath = ['skills', 'craft', action.skill, 'misc']
            } else {
                miscSkillPath = ['skills', action.skill, 'misc']
            }
            return (R.set(R.lensPath(miscSkillPath), Number(action.misc), state))
        case CHANGE_INDIVIDUAL_SKILL_TOTAL:
            let totalSkillPath = []
            if (action.skill in state.skills.knowledge) {
                totalSkillPath = ['skills', 'knowledge', action.skill, 'total']
            } else if (action.skill in state.skills.profession) {
                totalSkillPath = ['skills', 'profession', action.skill, 'total']
            } else if (action.skill in state.skills.perform) {
                totalSkillPath = ['skills', 'perform', action.skill, 'total']
            } else if (action.skill in state.skills.craft) {
                totalSkillPath = ['skills', 'craft', action.skill, 'total']
            } else {
                totalSkillPath = ['skills', action.skill, 'total']
            }
            return (R.set(R.lensPath(totalSkillPath), Number(action.newTotal), state))
        case CHANGE_OVERALL_SKILL_TOTAL:
            return R.set(R.lensPath(['skillPoints', 'total']), action.newTotal, state)
        case ADD_CLASS:
            if (action.newClass in state.classes) {
                return R.set(R.lensPath(['classes']), R.dissoc(action.newClass, state.classes), state)
            } else {
                return R.set(R.lensPath(['classes']), R.assoc(action.newClass, {level: 0}, state.classes), state)
            }
        case CHANGE_CLASS_LEVEL:
            return R.set(R.lensPath(['classes', action.playerClass, 'level']), Number(action.newLevel), state)
        case ADJUST_CLASS_SKILL_POINTS:
            return R.set(R.lensPath(['skillPoints', 'classes']), R.assoc(action.playerClass, Number(action.skillPoints), state.skillPoints.classes), state)
        case REMOVE_CLASS_SKILL_POINTS:
            return R.set(R.lensPath(['skillPoints', 'classes']), R.dissoc(action.playerClass, state.skillPoints.classes), state)
        case SET_SKILL_COST:
            let used  = 0
            for (let skill in state.skills) {
                if(state.skills[skill].ranks) {
                    let ranks = action.crossClass ? Number(state.skills[skill].ranks * 2) : Number(state.skills[skill].ranks)
                    used += ranks
                }
            }
            return R.set(R.lensPath(['skillPoints', 'used']), used, state)
        case SELECT_FIRST_LEVEL_CLASS:
            if (state.classes[action.playerClass].first) {
                return R.set(R.lensPath(['skillPoints']), R.dissoc('first', state.skillPoints), state)
            } else {
                return R.set(R.lensPath(['skillPoints']), R.assoc('first', action.playerClass , state.skillPoints), state)
            }
        default:
            return state
    }
}