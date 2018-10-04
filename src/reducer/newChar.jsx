import { CHANGE_CLASS_LEVEL, CHANGE_ATTRIBUTE, CHANGE_DETAIL, CHANGE_TOP_LEVEL, CHANGE_SKILL_RANK, CHANGE_SKILL_MISC, CHANGE_SKILL_TOTAL, ADD_CLASS, ADJUST_SKILL_POINTS, SELECT_FIRST_LEVEL_CLASS } from 'actions'
import * as R from 'ramda'

const newCharState = {
    player: '',
    classes: {},
    race: '',
    deity: '',
    skillPoints: {
        classes: {

        },
        total: 0
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
    skills: {
        acrobatics: {
            ranks: 0,
            misc: 0,
            syn: 0,
            total: 0,
            att: 'dexterity'
        },
        artifice: {
            ranks: 0,
            total: 0,
            misc: 0,
            syn: 0,
            att: 'intelligence'
        },
        autohypnosis: {
            ranks: 0,
            total: 0,
            misc: 0,
            syn: 0,
            att: 'wisdom'
        },
        bluff: {
            ranks: 0,
            total: 0,
            misc: 0,
            syn: 0,
            att: 'charisma'
        },
        climb: {
            ranks: 0,
            total: 0,
            misc: 0,
            syn: 0,
            att: 'strength'
        },
        concentration: {
            ranks: 0,
            total: 0,
            misc: 0,
            syn: 0,
            att: 'constitution'
        },
        craft: {
            att: 'intelligence',
        },
        'decipher script': {
            ranks: 0,
            total: 0,
            misc: 0,
            syn: 0,
            att: 'intelligence'
        },
        diplomacy: {
            ranks: 0,
            total: 0,
            misc: 0,
            syn: 0,
            att: 'charisma'
        },
        disguise: {
            ranks: 0,
            total: 0,
            misc: 0,
            syn: 0,
            att: 'charisma'
        },
        'escape artist': {
            ranks: 0,
            total: 0,
            misc: 0,
            syn: 0,
            att: 'dexterity'
        },
        forgery: {
            ranks: 0,
            total: 0,
            misc: 0,
            syn: 0,
            att: 'intelligence'
        },
        'handle animal': {
            ranks: 0,
            total: 0,
            misc: 0,
            syn: 0,
            att: 'wisdom'
        },
        heal: {
            ranks: 0,
            total: 0,
            misc: 0,
            syn: 0,
            att: 'wisdom'
        },
        intimidate: {
            ranks: 0,
            total: 0,
            misc: 0,
            syn: 0,
            att: 'charisma'
        },
        knowledge: {
            att: 'intelligence',
            arcana: {
                ranks: 0,
                misc: 0,
                syn: 0,
                total: 0,
            },
            'architecture & engineering': {
                ranks: 0,
                misc: 0,
                syn: 0,
                total: 0,
            },
            dungeoneering: {
                ranks: 0,
                misc: 0,
                syn: 0,
                total: 0,
            },
            history: {
                ranks: 0,
                misc: 0,
                syn: 0,
                total: 0,
            },
            local: {
                ranks: 0,
                misc: 0,
                syn: 0,
                total: 0,
            },
            nature: {
                ranks: 0,
                misc: 0,
                syn: 0,
                total: 0,
            },
            'nobility & royalty': {
                ranks: 0,
                misc: 0,
                syn: 0,
                total: 0,
            },
            psionics: {
                ranks: 0,
                misc: 0,
                syn: 0,
                total: 0,
            },
            'military & tactics': {
                ranks: 0,
                misc: 0,
                syn: 0,
                total: 0,
            },
            religion: {
                ranks: 0,
                misc: 0,
                syn: 0,
                total: 0,
            },
            'the planes': {
                ranks: 0,
                misc: 0,
                syn: 0,
                total: 0,
            },
    },
        magecraft: {
            ranks: 0,
            misc: 0,
            syn: 0,
            total: 0,
            att: 'intelligence'
        },
        perception: {
            ranks: 0,
            misc: 0,
            syn: 0,
            total: 0,
            att: 'wisdom'
        },
        perform: {
            att: 'charisma'
        },
        profession: {
            att: 'intelligence'
        },
        ride: {
            ranks: 0,
            misc: 0,
            syn: 0,
            total: 0,
            att: 'dexterity'
        },
        'sense motive': {
            ranks: 0,
            misc: 0,
            syn: 0,
            total: 0,
            att: 'wisdom'
        },
        'sleight of hand': {
            ranks: 0,
            misc: 0,
            syn: 0,
            total: 0,
            att: 'dexterity'
        },
        'speak language': [],
        stealth: {
            ranks: 0,
            misc: 0,
            syn: 0,
            total: 0,
            att: 'dexterity'
        },
        survival: {
            ranks: 0,
            misc: 0,
            syn: 0,
            total: 0,
            att: 'wisdom'
        },
        swim: {
            ranks: 0,
            misc: 0,
            syn: 0,
            total: 0,
            att: 'strength'
        },
        'use rope': {
            ranks: 0,
            misc: 0,
            syn: 0,
            total: 0,
            att: 'dexterity'
        },
    },
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
        case CHANGE_SKILL_TOTAL:
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
        case ADD_CLASS:
            if (action.newClass in state.classes) {
                return R.set(R.lensPath(['classes']), R.dissoc(action.newClass, state.classes), state)
            } else {
                return R.set(R.lensPath(['classes']), R.assoc(action.newClass, {level: 0}, state.classes), state)
            }
        case CHANGE_CLASS_LEVEL:
            return R.set(R.lensPath(['classes', action.playerClass, 'level']), Number(action.newLevel), state)
        case ADJUST_SKILL_POINTS:
            return R.set(R.lensPath(['skillPoints', 'classes']), R.assoc(action.playerClass, Number(action.skillPoints), state.skillPoints.classes), state)
        case SELECT_FIRST_LEVEL_CLASS:
            if (state.classes[action.playerClass].first) {
                return R.set(R.lensPath(['classes', action.playerClass]), R.dissoc('first', state.classes[action.playerClass]), state)
            } else {
                return  R.set(R.lensPath(['classes', action.playerClass]), R.assoc('first', true , state.classes[action.playerClass]), state)
            }
        default:
            return state
    }
}