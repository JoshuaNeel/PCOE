/*
This file contains the
code related to the
tickers view mode grid
in security group details
component
*/
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import GridData from '../security_group_summary/grid_data';
import GridHeaders from '../security_group_summary/grid_headers';
import {tickers_view_grid_data} 
from '../../../actions/security_group_actions/security_actions';

const TickersGridViewComponent = (props) => {
    const securityGroupData = useSelector((state) => state.security_reducers);
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
                        }
                        isCheckbox={props.isCheckbox} />
                    </thead>
                    <GridData
                    isCheckbox={props.isCheckbox}
                    gridData={
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
        <section className=''>

            <div className='table-responsive tickers_grid'>
                {
                renderGrid()
            } </div>
        </section>

    );
}

const TickersGridView = TickersGridViewComponent;
export default TickersGridView;
