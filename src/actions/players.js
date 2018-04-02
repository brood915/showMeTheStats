import {
    GET_PLAYERS,
    PLAYERS_ERROR,
    PLAYERS_LOADING
} from './actionTypes';

import axios from 'axios';

export function playersHasErrors(bool) {
    return {
     type: PLAYERS_ERROR,
     error: bool
    }
}

export function playersIsLoading(bool) {
    return {
     type: PLAYERS_LOADING,
     loading: bool
    }
}

export function fetchPlayersSuccess(players, teams) {
    return {
        type: GET_PLAYERS,
        players,
        teams
    }
}

export function getPlayers() {
    return(dispatch) => {
        dispatch(playersIsLoading(true));

    axios.get('/api/players')
        .then((resp) => {
                dispatch(playersIsLoading(false));
                dispatch(fetchPlayersSuccess(resp.data.elements, resp.data.teams));
        })
        .catch(() => {
            dispatch(playersIsLoading(false));
            dispatch(playersHasErrors(true));
        })
    }
}