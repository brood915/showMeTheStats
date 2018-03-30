import {
    ERROR,
    LOADING,
    GET_PLAYERS
} from './actionTypes';

import axios from 'axios';


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

//players-related actions
