/*
The file contains the code related to
equitiesTab.
*/

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import './equitiesTabStyles.scss';

export default function EquitiesTab(){

    const [tabName, setTabName] = useState("GlobalSettings");
    
    return(
        <section className='card' style={{marginBottom: '10px', marginLeft: '48px', marginRight: '5px', borderRadius: '0px'}}>
          <div className="equitiesTabClass">
            <Tabs
                id="uncontrolled-tab-example"
                className="mx-3 mb-5 equitiesClass"
                activeKey={tabName}
                onSelect={(k) => setTabName(k)}
                variant="pills"
            >
                <Tab eventKey="GlobalSettings" title="GlobalSettings">
                </Tab>
                <Tab eventKey="TickerSearch" title="TickerSearch">
                </Tab>
                <Tab eventKey="NonStandardTickers" title="NonStandardTickers">
                </Tab>
            </Tabs>
          </div> 
        </section>
    )
}
