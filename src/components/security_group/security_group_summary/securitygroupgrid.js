/* code written by supriya kajana.
   this file contains the code
   for the security group definition summary
   table
*/
import {useSelector,useDispatch} from 'react-redux';
import GridData from './gridData';
import GridHeaders from './gridHeaders';
import { security_group_grid_data }
from '../../../actions/security_group_actions/security_actions';
import { useEffect, useState } from 'react';
import GridWrapperSection from './gridWrapperSection';

  function SecurityGroupGridMethod(){
    // Code to render the grid for security group
    const dispatch = useDispatch();
    const securityGroupData = useSelector((state) => state.rule);
    const [state,setState] = useState();
    useEffect(() => {
        dispatch(security_group_grid_data());
        setState({state:securityGroupData});
      },[]);
     function consoleData(){
        if(securityGroupData.hasOwnProperty('securityGridData')){

          return(
            <table className='table table-fixed' id='securitygrouptable'>
                     <thead>
  
                      <GridHeaders gridHeaders={securityGroupData.securityGridData.gridHeaders}/>
                      <GridHeaders gridHeaders={securityGroupData.securityGridData.subHeaders}/>
                     </thead>
                      <GridData gridData={securityGroupData.securityGridData.SecurityGroupData.data}
                      actionButtons={true} 
                              dataFieldKeys={
                                Object.keys(
                                  securityGroupData.securityGridData.SecurityGroupData.data[0])} />
                  </table>
          )
        }
      }
      // rendering the wrapper for the security group
      // summary section
    return(
            <section className='card grid_wrapper'>
                <div className='security_group_grid_section_wrapper'>

                <GridWrapperSection />
                <div className='table-responsive security_group_grid'>
                 {consoleData()}
                
                </div>
                </div>
            </section>
    )
}
const SecurityGroupGrid = React.memo(SecurityGroupGridMethod);
export default SecurityGroupGrid;
