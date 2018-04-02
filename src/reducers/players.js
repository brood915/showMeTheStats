import { combineReducers } from 'redux';

const initialState = {
    players:[],
    teams:[]
}
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

export function playersData(state = initialState, action) {
    switch(action.type) {
        case 'GET_PLAYERS':
            return Object.assign({}, state, {
                players: action.players,
                teams: action.teams //only needed to get the names of the players' teams
            });
        default:
            return state;
    } 
}