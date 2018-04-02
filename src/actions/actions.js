import {
    ERROR,
    LOADING,
    GET_DATA
} from './actionTypes';

import axios from 'axios';

//players-related actions

//others
export function handleError(bool) {
    return {
     type: ERROR,
     hasErrors: bool
    }
}

export function handleLoading(bool) {
    return {
     type: LOADING,
     isLoading: bool
    }
}

export function fetchDataSuccess(data) {
    return {
        type: GET_DATA,
        data
    }
}

export function getData(url) {
    return(dispatch) => {
        dispatch(handleLoading(true));

    axios.get('/api/players')
        .then((data) => {
            console.log(data);
            dispatch(handleLoading(false));
            dispatch(fetchDataSuccess(data));
        })
        .catch(() => {
            dispatch(handleLoading(false));
            dispatch(handleError(true));
        })
    }
}