import {
    ERROR,
    LOADING,
    GET_PLAYERS
} from './actionTypes';

import axios from 'axios';

//players-related actions

//others
export function handleError(bool) {
    return {
     type: ERROR,
     error: bool
    }
}

export function handleLoading(bool) {
    return {
     type: LOADING,
     loading: bool
    }
}

export function fetchPlayers(data) {
    return {
        type: GET_PLAYERS,
        data
    }
}

export function getData(url) {
    return(dispatch) => {
        dispatch(handleLoading(true));

    axios.get(url)
        .then((resp) => {
            if (resp.data[0]['web_name']) { // if this property exists, this means it's data for players
                dispatch(handleLoading(false));
                dispatch(fetchPlayers(resp.data));
            }
        })
        .catch(() => {
            dispatch(handleLoading(false));
            dispatch(handleError(true));
        })
    }
}