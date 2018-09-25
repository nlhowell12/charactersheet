import { DRAWER_TOGGLE } from 'actions'

export const uiState = {
    leftNav: false,
}

export default (state = uiState, action) => {
    switch(action.type) {
        case DRAWER_TOGGLE:
            return {...state, leftNav: !state.leftNav};
        default:
            return state;
    }
}
