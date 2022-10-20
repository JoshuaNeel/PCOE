import {gridHeaders,SecurityGroupData} from '../../utils/table_utils';


export const fetch_dummy_data = () => {
    return function (dispatch, getState) {
        const state = getState();
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                dispatch(load_data(json))
            })

    }
}
export const load_data = (data) => {
    return function (dispatch, getState) {
        return {
            type: "DUMMY",
            payload: data
        }
    }
}
/* Action to maintain the flag for
component to display in security group
definition
*/
export const toggle_secuirty_component = (flagOption,rowData) => {
    const payLoadObject = {flagOption,rowData}
    return function (dispatch, getState) {
        const state = getState();
        dispatch({
            type: "SECURITY_GROUP_FLAG",
            payload: payLoadObject
        })

    }
}
export const toggle_component = (data) => {
    return function (dispatch, getState) {
        return {
            type: "SECURITY_GROUP_FLAG",
            payload: data
        }
    }
}

/* Action to maintain the data for
the table data
*/
export const security_group_grid_data = () => {
    const gridPayload ={gridHeaders,SecurityGroupData}
    return function (dispatch, getState) {
        const state = getState();
        dispatch({
            type: "SECURITY_GROUP_DATA",
            payload: gridPayload
        })

    }
}
