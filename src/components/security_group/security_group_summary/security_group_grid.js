/* code written by supriya kajana.
   this file contains the code
   for the security group definition summary
   table
*/
import {useSelector,useDispatch} from 'react-redux';
import GridData from './grid_data';
import GridHeaders from './grid_headers';
import { security_group_grid_data }
from '../../../actions/security_group_actions/security_actions';
import { useEffect, useState } from 'react';
import GridWrapperSection from './grid_wrapper_section';

  function SecurityGroupGridMethod(){
    // Code to render the grid for security group
    const dispatch = useDispatch();
    const securityGroupData = useSelector((state) => state.security_reducers);
    const [state,setState] = useState();
    useEffect(() => {
        dispatch(security_group_grid_data());
        setState({state:securityGroupData});
      },[]);
     function renderGrid(){
        if(securityGroupData.hasOwnProperty('securityGridData')){
          if(securityGroupData.securityGridData.SecurityGroupData.data.length > 0){

            return(
              <table className='table table-fixed' id='securitygrouptable'>
                       <thead>
    
                        <GridHeaders gridHeaders={securityGroupData.securityGridData.gridHeaders}
                        gridData={securityGroupData.securityGridData.SecurityGroupData.data}/>
                        <GridHeaders gridHeaders={securityGroupData.securityGridData.subHeaders}
                        gridData={securityGroupData.securityGridData.SecurityGroupData.data}/>
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
      }
      // rendering the wrapper for the security group
      // summary section
    return(
            <section className='card grid_wrapper'>
                <div className='security_group_grid_section_wrapper'>

                <GridWrapperSection />
                <div className='table-responsive security_group_grid'>
                 {renderGrid()}
                
                </div>
                </div>
            </section>
    )
}
const SecurityGroupGrid = React.memo(SecurityGroupGridMethod);
export default SecurityGroupGrid;
