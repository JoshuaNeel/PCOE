/*
The file contains the code related to
the main layout for the
Routing dashboard
*/

import {RoutingDashboardHeader} from './RoutingDashboardHeader';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useEffect, useState } from 'react';
import './routingTabStyles.scss';
import EquitiesTab from './EquitiesTab';

export default function RoutingDashboardTabs(){

    const [tabName, setTabName] = useState("Equities");
    
    return(
        <section className='card mr-5'>
          <div className='routingdashboard_main'>
            <RoutingDashboardHeader tabName={tabName} />
            <div className="mx-3 routingDashboardMainClass">    
            <Tabs
                id="uncontrolled-tab-example"
                className="mx-5 mt-3 myClass"
                activeKey={tabName}
                onSelect={(k) => setTabName(k)}
                variant="pills"
            >
                <Tab eventKey="Equities" title="Equities" >
                    {<EquitiesTab />}
                </Tab>
                <Tab eventKey="Options" title="Options">
                    {<EquitiesTab />}
                </Tab>
            </Tabs>
            </div> 
          </div>
        </section>
    )
}
