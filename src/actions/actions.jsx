const DRAWER_TOGGLE = 'DRAWER_TOGGLE';
const LOGIN = 'LOGIN';
const ADD_CHARACTER = "ADD_CHARACTER";
const CHANGE_USER_LEVEL = "CHAGE_USER_LEVEL";

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

export { drawerToggle, login, addCharacter, changeUserLevel, LOGIN, ADD_CHARACTER, CHANGE_USER_LEVEL, DRAWER_TOGGLE }