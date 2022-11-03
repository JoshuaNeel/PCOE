/*
This file contains
the code related to
the render the heading
it's a reusable component
*/

import { useSelector } from "react-redux";

export default function HeadingElement(props){
    const securityGroupName = useSelector((state) => state.rule);
    console.log(securityGroupName);
    const renderHeader = () =>{
        if(securityGroupName !== undefined && securityGroupName.securityData?.rowData?.hasOwnProperty('groupname')){
            return `${props.header_text} | ${securityGroupName.securityData?.rowData?.groupname}`;
        }
        else{
           return props.header_text;
        }
    }
    return(
        <h2 style={props.style_header}>
            {renderHeader()}
        </h2>
    )
}