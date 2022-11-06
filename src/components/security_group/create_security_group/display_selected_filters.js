/*
This file contains the code
related to the
displaying the seected filter list itmes
*/
import {Filters_Selected} from '../../../utils/createGroup_utils';
import { useSelector } from 'react-redux';
const DisplaySelectedFilters = (props) => {
    const securityGroupData = useSelector((state) => state);
    const localState = securityGroupData?.security_reducers?.filtersData
        ?.filtersSelected;
    return (
        <div className='filters_card_wrapper'>
            <h2>Filters Selected</h2>
            <div className='filters_card_container'>
                <div className='row'>
                    {
                    Filters_Selected.map(item => {
                        return (
                            <div className='col-4'>
                                {
                                item.labelName
                            }:{localState?.pme.join(',')}
                            </div>
                        )
                    })
                } </div>
            </div>
        </div>
    );
};

const DisplaySelectedFiltersComponent = DisplaySelectedFilters;
export default DisplaySelectedFiltersComponent;
