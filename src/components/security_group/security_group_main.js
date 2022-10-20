/*
The file contains the code related to
the main layout for the
security group definition screens
*/
import {useSelector,useDispatch} from 'react-redux';
import GroupDetailsMain from './security_group_details/groupDetailsMain';
import SecurityGroupGrid from './security_group_summary/securitygroupgrid';
import './security_group.scss'
import HeadingElement from '../../common_components/heading_element';

/*Creating a style object for the
top header section element
which we will be passing to the
child component
*/
const heading_styles ={
    color: 'rgba(2,33,105,1)',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '22px'};

export default function SecurityGroupMain(){
    const securityGroupData = useSelector((state) => state.rule);

    // method to render the main section based on the
    // condition either to show the summary component
    // or to show the group details component
    const renderMainSection = ()=>{
        if(securityGroupData.securityData.flagOption){
            return ( <GroupDetailsMain
                rowData={securityGroupData.securityData.rowData} />);
        }
        else{
            return (<SecurityGroupGrid />);
        }
    };
    
    return(
        <section className='security_group_main_section card'>
          <div className='security_group_grid_main'>
          <HeadingElement 
                        header_text='Security Group Definition'
                        style_header={heading_styles} />
          {renderMainSection()}
          </div>
        </section>
    )
}