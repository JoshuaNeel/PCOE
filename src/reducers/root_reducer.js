import rule_reducer from './rule_reducer/reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    rule:rule_reducer
})