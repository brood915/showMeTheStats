import {
    ERROR,
    LOADING,
    GET_PLAYERS
} from './actionTypes';

import axios from 'axios';


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

//players-related actions
