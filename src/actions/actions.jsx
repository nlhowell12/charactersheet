const DRAWER_TOGGLE = 'DRAWER_TOGGLE';
const LOGIN = 'LOGIN';
const ADD_CHARACTER = "ADD_CHARACTER";
const CHANGE_USER_LEVEL = "CHAGE_USER_LEVEL";
const LOGOUT = "LOGOUT";
const CHANGE_ATTRIBUTE = 'CHANGE_ATTRIBUTE';
const CHANGE_DETAIL = 'CHANGE_DETAIL';
const CHANGE_TOP_LEVEL = 'CHANGE_TOP_LEVEL';
const CHANGE_SKILL_RANK = 'CHANGE_SKILL_RANK';
const CHANGE_SKILL_MISC = 'CHANGE_SKILL_MISC';
const CHANGE_SKILL_TOTAL = 'CHANGE_SKILL_TOTAL';
const CLASS_TOGGLE = 'CLASS_TOGGLE';
const ADD_CLASS = 'ADD_CLASS';
const CHANGE_CLASS_LEVEL = 'CHANGE_CLASS_LEVEL'

const drawerToggle = () => {
    return {
        type: DRAWER_TOGGLE
    }
}

const classToggle = () => {
    return {
        type: CLASS_TOGGLE
    }
}

const login = () => {
    return {
        type: LOGIN
    }
}

const logout = () => {
    return {
        type: LOGOUT
    }
}

const addCharacter = () => {
    return {
        type: ADD_CHARACTER
    }
}

const changeUserLevel = () => {
    return {
        type: CHANGE_USER_LEVEL
    }
}

const changeAttribute = (attribute, value) => {
    return {
        type: CHANGE_ATTRIBUTE,
        attribute,
        value
    }
}

const changeDetail = (detail, value) => {
    return {
        type: CHANGE_DETAIL,
        detail,
        value
    }
}

const changeTopLevel = (change, value) => {
    return {
        type: CHANGE_TOP_LEVEL,
        change, 
        value
    }
}

const changeSkillRank = (skill, rank) => {
    return {
        type: CHANGE_SKILL_RANK,
        skill,
        rank
    }
}

const changeSkillMisc = (skill, misc) => {
    return {
        type: CHANGE_SKILL_MISC,
        skill,
        misc
    }
}

const changeSkillTotal = (skill, newTotal) => {
    return {
        type: CHANGE_SKILL_TOTAL,
        newTotal,
        skill
    }
}

const addClass = (newClass) => {
    return {
        type: ADD_CLASS,
        newClass
    }
}

const changeClassLevel = (playerClass, newLevel) => {
    return {
        type: CHANGE_CLASS_LEVEL,
        playerClass,
        newLevel
    }
}

export { 
    drawerToggle, 
    login, 
    logout, 
    addCharacter, 
    changeUserLevel, 
    changeAttribute, 
    changeDetail,
    changeTopLevel,
    changeSkillRank,
    changeSkillMisc,
    changeSkillTotal,
    classToggle, 
    addClass,
    changeClassLevel,
    LOGIN, 
    LOGOUT, 
    ADD_CHARACTER, 
    CHANGE_USER_LEVEL, 
    DRAWER_TOGGLE, 
    CHANGE_ATTRIBUTE,
    CHANGE_DETAIL,
    CHANGE_TOP_LEVEL,
    CHANGE_SKILL_RANK,
    CHANGE_SKILL_MISC,
    CHANGE_SKILL_TOTAL,
    CLASS_TOGGLE,
    ADD_CLASS,
    CHANGE_CLASS_LEVEL,
}