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
const CHANGE_INDIVIDUAL_SKILL_TOTAL = 'CHANGE_INDIVIDUAL_SKILL_TOTAL';
const CHANGE_OVERALL_SKILL_TOTAL = 'CHANGE_OVERALL_SKILL_TOTAL';
const CLASS_TOGGLE = 'CLASS_TOGGLE';
const ADD_CLASS = 'ADD_CLASS';
const CHANGE_CLASS_LEVEL = 'CHANGE_CLASS_LEVEL';
const ADJUST_CLASS_SKILL_POINTS = 'ADJUST_CLASS_SKILL_POINTS';
const SELECT_FIRST_LEVEL_CLASS = 'SELECT_FIRST_LEVEL_CLASS';
const REMOVE_CLASS_SKILL_POINTS = 'REMOVE_CLASS_SKILL_POINTS';
const SET_SKILL_COST = 'SET_SKILL_COST';

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

const changeIndividualSkillTotal = (skill, newTotal) => {
    return {
        type: CHANGE_INDIVIDUAL_SKILL_TOTAL,
        newTotal,
        skill
    }
}

const changeOverallSkillTotal = (newTotal) => {
    return {
        type: CHANGE_OVERALL_SKILL_TOTAL,
        newTotal
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

const adjustClassSkillPoints = (playerClass, skillPoints) => {
    return {
        type: ADJUST_CLASS_SKILL_POINTS,
        playerClass,
        skillPoints
    }
}

const removeClassSkillPoints = (playerClass) => {
    return {
        type: REMOVE_CLASS_SKILL_POINTS,
        playerClass
    }
}
const selectFirstLevelClass = (playerClass) => {
    return {
        type: SELECT_FIRST_LEVEL_CLASS,
        playerClass
    }
}

const setSkillCost = (skill, crossClass) => {
    return {
        type: SET_SKILL_COST,
        skill,
        crossClass
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
    changeIndividualSkillTotal,
    changeOverallSkillTotal,
    classToggle, 
    addClass,
    changeClassLevel,
    adjustClassSkillPoints,
    selectFirstLevelClass,
    removeClassSkillPoints,
    setSkillCost,
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
    CHANGE_INDIVIDUAL_SKILL_TOTAL,
    CHANGE_OVERALL_SKILL_TOTAL,
    CLASS_TOGGLE,
    ADD_CLASS,
    CHANGE_CLASS_LEVEL,
    ADJUST_CLASS_SKILL_POINTS,
    SELECT_FIRST_LEVEL_CLASS,
    REMOVE_CLASS_SKILL_POINTS,
    SET_SKILL_COST,
}