import { combineReducers } from 'redux';

const initialState = {
  players:[]
}

function hasErrors(state = false, action) {
    switch (action.type) {
        case 'ERROR':
            return action.error;
        default:
            return state;
    }
}

function isLoading(state = false, action) {
    switch (action.type) {
        case 'LOADING':
            return action.loading;
        default:
            return state;
    }
}

function players(state = initialState, action) {
    switch(action.type) {
        case 'GET_PLAYERS':
            return Object.assign({}, state, {
                players: action.data
            })
        default:
            return state;
    } 
}

const app = combineReducers({
    hasErrors, isLoading, players
  });

export default app;