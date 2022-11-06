/*
This file contains
the code related to
the render the heading
it's a reusable component
*/

import { useSelector,useDispatch } from "react-redux";
import backIconImage from '../assets/images/backIcon.png';
import { toggle_secuirty_component }
 from '../actions/security_group_actions/security_actions';

export default function HeadingElement(props){
    const securityGroupName = useSelector((state) => state.security_reducers);
    const dispatch = useDispatch();
    const renderHeader = () =>{
        if(securityGroupName !== undefined &&
             securityGroupName.securityData?.subHeadingTitle !== ''){
            return `${props.header_text} | ${securityGroupName.securityData?.subHeadingTitle}`;
        }
        else{
           return props.header_text;
        }
    };
    const handleBakClickEvent = () =>{
        dispatch(toggle_secuirty_component('security_summary_page',[],''))
    }
    return(
        <div style={{display:'flex',justifyContent:'space-between'}}>

        <h2 style={props.style_header}>
            {renderHeader()}
        </h2>
          {securityGroupName.securityData.flagOption !== 'security_summary_page' &&
          
        <span onClick={handleBakClickEvent} style={{cursor:'pointer'}}>
        <img src={backIconImage} style={{height:'24p',width:'24px'}} /> Back
        </span>
          }
        </div>
    )
}