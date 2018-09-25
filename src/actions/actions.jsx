const DRAWER_TOGGLE = 'DRAWER_TOGGLE';
const LOGIN = 'LOGIN';
const ADD_CHARACTER = "ADD_CHARACTER";
const CHANGE_USER_LEVEL = "CHAGE_USER_LEVEL";
const LOGOUT = "LOGOUT";
const CHANGE_ATTRIBUTE = 'CHANGE_ATTRIBUTE'

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

export { drawerToggle, login, logout, addCharacter, changeUserLevel, changeAttribute, LOGIN, LOGOUT, ADD_CHARACTER, CHANGE_USER_LEVEL, DRAWER_TOGGLE, CHANGE_ATTRIBUTE }