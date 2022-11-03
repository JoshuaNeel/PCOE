/*
This file contains the
code related to the
tickers view mode grid
in security group details
component
*/
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import GridData from '../security_group_summary/gridData';
import GridHeaders from '../security_group_summary/gridHeaders';
import {tickers_view_grid_data} 
from '../../../actions/security_group_actions/security_actions';
import DropDownComponent from
 '../../../common_components/input_elements/dropdown';

const TickersGridViewComponent = (props) => {
    const securityGroupData = useSelector((state) => state.rule);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tickers_view_grid_data())
    }, []);
    function renderGrid() {
        if (securityGroupData.hasOwnProperty('tickersData')) {

            return (
                <table className='table table-fixed' id='tickersViewGrid'>
                    <thead>
                        <GridHeaders gridHeaders={
                            securityGroupData.tickersData.tickersDetailsHeaders
                        }/>
                    </thead>
                    <GridData gridData={
                            securityGroupData.tickersData.tickersViewData.data
                        }
                        actionButtons={false}
                        dataFieldKeys={
                            Object.keys(securityGroupData.tickersData.tickersViewData.data[0])
                        }/>
                </table>

            )
        }
    }
    return (
        <section className='card grid_wrapper'>

            <div className='table-responsive tickers_grid'>
                {
                renderGrid()
            } </div>
            <DropDownComponent/>
        </section>

    );
}

const TickersGridView = TickersGridViewComponent;
export default TickersGridView;
