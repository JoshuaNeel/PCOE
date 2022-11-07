
export const fetch_dummy_data = () => {
    return function (dispatch, getState) {
        const state = getState();
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
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
