import { DRAWER_TOGGLE, CLASS_TOGGLE } from 'actions'

export const uiState = {
    leftNav: false,
    classDialog: false
}

export default (state = uiState, action) => {
    switch(action.type) {
        case DRAWER_TOGGLE:
            return {...state, leftNav: !state.leftNav};
        case CLASS_TOGGLE:
            return {...state, classDialog: !state.classDialog}
        default:
            return state;
    }
}
