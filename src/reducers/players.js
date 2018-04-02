import { combineReducers } from 'redux';

export function playersHasErrors(state = false, action) {
    switch (action.type) {
        case 'PLAYERS_ERROR':
            return action.error;
        default:
            return state;
    }
}

export function playersIsLoading(state = false, action) {
    switch (action.type) {
        case 'PLAYERS_LOADING':
            return action.loading;
        default:
            return state;
    }
}

export function players(state = [], action) {
    switch(action.type) {
        case 'GET_PLAYERS':
            return action.players;
        default:
            return state;
    } 
}