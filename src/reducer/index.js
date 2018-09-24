import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ui from 'reducer/ui'
import user from 'reducer/user'

export default combineReducers({
    ui,
    user,
    form: formReducer
})

    