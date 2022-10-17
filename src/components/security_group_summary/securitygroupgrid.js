/* code written by supriya kajana.
   this file contains the code
   for the security group definition summary
   table
*/

import GridData from './gridData';
import GridHeaders from './gridHeaders';
import {gridHeaders,gridData} from '../../utils/table_utils';

export default function SecurityGroupGrid(){
    // Code to render the grid for security group
    return(
        <section className='table-responsive security_group_grid'>
            <table className='table'>
                <GridHeaders gridHeaders={gridHeaders} />
                <GridData gridData={gridData} />
            </table>
        </section>
    )
}