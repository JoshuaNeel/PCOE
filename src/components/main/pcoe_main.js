import React, { useState } from 'react';
import Header from '../../common_components/headerSection/header';
import { Navbar, Button} from 'react-bootstrap';
import SecurityGroupDefinition from '../ruleconfigTabs/SecurityGroupDefinition';
import ProductSuitability from '../ruleconfigTabs/ProductSuitability';
import RoutingDashboard from '../ruleconfigTabs/RoutingDashboard';
import {Routes, Route, Link,useNavigate} from 'react-router-dom';
import DashboardLogo from '../../assets/images/RoutingDashboardIcon.png';
import GroupLogo from '../../assets/images/SecurityGroupIcon.png';
import PartnerLogo from '../../assets/images/ProductSuitabilityIcon.png';
import './styles.scss';
import SecurityGroupMain from '../security_group/security_group_main';

export default function PCOE_Main() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (value) => {
    setActiveButton(value);
  };
  return (
    <>
      <Header />
        <Navbar className="navbarContainer" style={{ backgroundColor: 'rgb(2, 33, 105)', height: '100px', padding: '0px', margin: '0px'}}>
          <Navbar.Brand className="navItem securityGroup" style={{marginLeft: '10%'}}>
            <Button id="navigationButton" className={activeButton === 1 && "activeBtn"} onClick={() => {navigate("/"); handleButtonClick(1);}}>
                <img className="navIcons" src={GroupLogo} style={{height: 24}} />
                <p className="dashboardTabs">Security Group Definition</p>
            </Button>
          </Navbar.Brand> 
          <Navbar.Brand className="navItem" >
            <Button id="navigationButton" className={activeButton === 2 && "activeBtn"} onClick={()=> {navigate("/productSuitability"); handleButtonClick(2);}}>
                <img className="navIcons" src={PartnerLogo}  style={{height: 28}} />
                <p className="dashboardTabs" >Product Suitability</p>
            </Button>
          </Navbar.Brand> 
          <Navbar.Brand className="navItem">
            <Button id="navigationButton" className={activeButton === 3 && "activeBtn"} onClick={()=>{navigate("/routingDashboard"); handleButtonClick(3);}}>
                <img className="navIcons" src={DashboardLogo} style={{height: 24}} />
                <p className="dashboardTabs" >Routing Dashboard</p>
            </Button>
          </Navbar.Brand>
        </Navbar>

      <Routes>
        <Route path="/routingDashboard" element={<RoutingDashboard />} />
        <Route path="/productSuitability" element={<ProductSuitability />} />
        <Route path="/" element={<SecurityGroupMain />} />
        {/* <Route path="/" element={<SecurityGroupDefinition />} /> */}
      </Routes>
    </>
  )
}
