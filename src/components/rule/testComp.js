import React from 'react';
import { fetch_dummy_data } from '../../actions/rule_actions/actions';
import { useSelector, useDispatch } from 'react-redux';
const TestComp = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    dispatch(fetch_dummy_data())
    return (
        <div>
            <h1>React App</h1>
        </div>
    )
}
export default TestComp;