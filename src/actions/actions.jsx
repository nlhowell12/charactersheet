const DRAWER_TOGGLE = 'DRAWER_TOGGLE';
const LOGIN = 'LOGIN';
const ADD_CHARACTER = "ADD_CHARACTER";
const CHANGE_USER_LEVEL = "CHAGE_USER_LEVEL";
const LOGOUT = "LOGOUT";
const CHANGE_ATTRIBUTE = 'CHANGE_ATTRIBUTE';
const CHANGE_DETAIL = 'CHANGE_DETAIL';
const CHANGE_TOP_LEVEL = 'CHANGE_TOP_LEVEL';

const drawerToggle = () => {
    return {
        type: DRAWER_TOGGLE
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

export { 
    drawerToggle, 
    login, 
    logout, 
    addCharacter, 
    changeUserLevel, 
    changeAttribute, 
    changeDetail,
    changeTopLevel, 
    LOGIN, 
    LOGOUT, 
    ADD_CHARACTER, 
    CHANGE_USER_LEVEL, 
    DRAWER_TOGGLE, 
    CHANGE_ATTRIBUTE,
    CHANGE_DETAIL,
    CHANGE_TOP_LEVEL, 
}