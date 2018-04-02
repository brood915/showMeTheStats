import { combineReducers } from 'redux';
import { players, playersHasErrors, playersIsLoading } from './players';

const reducersContainer = combineReducers({
    playersHasErrors, 
    playersIsLoading, 
    players
  });

export default reducersContainer;