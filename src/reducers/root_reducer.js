import rule_reducer from './rule_reducer/reducer';
import security_reducer from './security_group_reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    rule:rule_reducer,
    security_reducers: security_reducer
})