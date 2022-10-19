import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Header from './common_components/sections/header'
import TestComp from './components/rule/testComp.js';
import RuleContainer from './components/rule/rule_container';
import PCOE_Main from './components/main/pcoe_main';
export default function App() {
    
    return (
        <Provider store={store}>
            {/* <Header /> */}
            {/* <RuleContainer /> */}
            <PCOE_Main />
            {/* <TestComp /> */}
        </Provider>        
    );
}