import {gridHeaders,subHeaders,SecurityGroupGridData,
    tickersDetailsHeaders,tickersViewData} from '../../utils/table_utils';


/* Action to maintain the flag for
component to display in security group
definition
*/
export const toggle_secuirty_component = (flagOption,rowData,subHeadingTitle) => {
    const payLoadObject = {flagOption,rowData,subHeadingTitle}
    return function (dispatch, getState) {
        const state = getState();
        dispatch({
            type: "SECURITY_GROUP_FLAG",
            payload: payLoadObject
        })

    }
}

/* Action to maintain the data for
the table data
*/
export const security_group_grid_data = (SecurityGroupDatas ) => {
    const SecurityGroupData = SecurityGroupDatas !== undefined? SecurityGroupDatas : SecurityGroupGridData;
    const gridPayload ={gridHeaders,subHeaders,SecurityGroupData}
    return function (dispatch, getState) {
        const state = getState();
        dispatch({
            type: "SECURITY_GROUP_DATA",
            payload: gridPayload
        })

    }
}
/* Action to maintain the data for
the table data for tickers
*/
export const tickers_view_grid_data = () => {
    const gridPayload ={tickersDetailsHeaders,tickersViewData}
    return function (dispatch, getState) {
        const state = getState();
        dispatch({
            type: "TICKERS_GRID_DATA",
            payload: gridPayload
        })

    }
}

/*Action to maintain the data
for the create group filter selection display
*/
export const create_group_filter_selection = (filtersSelectedData) => {
    const filtersPayload ={filtersSelectedData}
    return function (dispatch, getState) {
        const state = getState();
        dispatch({
            type: "FILTERS_SELECTED_DATA",
            payload: filtersPayload
        })

    }
}