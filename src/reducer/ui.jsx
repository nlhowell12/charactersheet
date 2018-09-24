import { DRAWER_TOGGLE } from 'actions'

export const uiState = {
    leftNav: false,
}

export default (state = uiState, action) => {
    switch(action.type) {
        case DRAWER_TOGGLE:
            let toggleState = {...state, leftNav: !state.leftNav}
            return toggleState;
        default:
            return state;
    }
}
