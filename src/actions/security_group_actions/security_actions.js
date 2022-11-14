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
/* Action to maintain the data for
table data for tickers after we 
include or exclude some tickers
*/
export const tickers_new_grid_data = (updatedTickerViewData) => {
    const newTickersData = updatedTickerViewData !== undefined? updatedTickerViewData : tickersViewData;
    const gridPayload ={tickersDetailsHeaders,tickersViewData: newTickersData}
    return function (dispatch, getState) {
        const state = getState();
        dispatch({
            type: "NEW_TICKERS_GRID_DATA",
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

/* Mock apis to fetch/update data from client url*/
export const fetch_api_data = () => {

    return function (dispatch, getState) {
      const state = getState();
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            const dummyData = json;
          dispatch({ type: "DUMMY_API_DATA", payload: dummyData });
        });
    };
  };

export const update_api_data = (data) => {
    
    return async function(dispatch, getState){
        const state = getState();
        const initialTodo = { data }
        const response = await client.post('/fakeApi/todos', { todo: initialTodo });
        dispatch({ type: 'UPDATE_API_DATA', payload: response.todo })    
    }
}
