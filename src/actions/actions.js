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
     hasErrors: bool
    }
}

export function handleLoading(bool) {
    return {
     type: LOADING,
     isLoading: bool
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
        .then((data) => {
            if (data[0]['web_name']) { // if this property exists, this means it's data for players
                console.log(data);
                dispatch(handleLoading(false));
                dispatch(fetchPlayers(data));
            }
        })
        .catch(() => {
            dispatch(handleLoading(false));
            dispatch(handleError(true));
        })
    }
}