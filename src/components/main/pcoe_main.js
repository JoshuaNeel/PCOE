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
import SecurityGroupGrid from '../security_group_summary/securitygroupgrid';

export default function PCOE_Main() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (value) => {
    setActiveButton(value);
  };
  return (
    <>
      <Header />
        <Navbar className="navbarContainer" style={{ marginLeft: '2px', marginRight: '2px', backgroundColor: 'rgb(2, 33, 105)', height: 90, marginTop: '-9px' }}>
          <Navbar.Brand className="navItem securityGroup" style={{height: 90, marginLeft: '90px'}} >
            <Button id="navigationButton" className={activeButton === 1 && "activeBtn"} onClick={() => {navigate("/"); handleButtonClick(1);}}>
                <img className="navIcons" src={GroupLogo} style={{height: 24, width:30}} />
                <p className="dashboardTabs">Security Group Definition</p>
            </Button>
          </Navbar.Brand> 
          <Navbar.Brand className="navItem"  style={{height: 90}}>
            <Button id="navigationButton" className={activeButton === 2 && "activeBtn"} onClick={()=> {navigate("/productSuitability"); handleButtonClick(2);}}>
                <img className="navIcons" src={PartnerLogo} style={{height: 28, width:30, paddingTop: '1px'}} />
                <p className="dashboardTabs" >Product Suitability</p>
            </Button>
          </Navbar.Brand> 
          <Navbar.Brand className="navItem" style={{height: 90}} >
            <Button id="navigationButton" className={activeButton === 3 && "activeBtn"} onClick={()=>{navigate("/routingDashboard"); handleButtonClick(3);}}>
                <img className="navIcons" src={DashboardLogo} style={{height: 24, width:28}} />
                <p className="dashboardTabs" >Routing Dashboard</p>
            </Button>
          </Navbar.Brand>
        </Navbar>

      <Routes>
        <Route path="/routingDashboard" element={<RoutingDashboard />} />
        <Route path="/productSuitability" element={<ProductSuitability />} />
        <Route path="/" element={<SecurityGroupGrid />} />
        {/* <Route path="/" element={<SecurityGroupDefinition />} /> */}
      </Routes>
    </>
  )
}
