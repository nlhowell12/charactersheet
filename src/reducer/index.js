import { combineReducers } from 'redux';
import ui from 'reducer/ui';
import user from 'reducer/user';
import newChar from 'reducer/newChar'

export default combineReducers({
    ui,
    user,
    newChar,
})

    