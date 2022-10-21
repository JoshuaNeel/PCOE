/* code written by supriya kajana.
   this file contains the code
   for the security group definition summary
   table
*/
import {useSelector,useDispatch} from 'react-redux';
import GridData from './gridData';
import GridHeaders from './gridHeaders';
import {gridHeaders,SecurityGroupData,
    subHeaders} from '../../../utils/table_utils';
import GroupDetailsMain from '../security_group_details/groupDetailsMain';
import { security_group_grid_data } from '../../../actions/rule_actions/actions';
import { useEffect, useMemo } from 'react';
import GridWrapperSection from './gridWrapperSection';

  function SecurityGroupGridMethod(){
    // Code to render the grid for security group
    const dispatch = useDispatch();
    const securityGroupData = useSelector((state) => state.rule);
    useEffect(() => {
        dispatch(security_group_grid_data());
    
      },[]);
      // rendering the wrapper for the security group
      // summary section
    return(
            <section className='card grid_wrapper'>
                <div className='security_group_grid_section_wrapper'>

                <GridWrapperSection />
                <div className='table-responsive security_group_grid'>
                <table className='table table-fixed' id='securitygrouptable'>
                    <GridHeaders gridHeaders={gridHeaders}
                    subHeaders={subHeaders} />
                    <GridData gridData={SecurityGroupData.data} 
                            dataFieldKeys={Object.keys(SecurityGroupData.data[0])} />
                </table>
                </div>
                </div>
            </section>
    )
}
const SecurityGroupGrid = React.memo(SecurityGroupGridMethod);
export default SecurityGroupGrid;
