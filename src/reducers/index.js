import { combineReducers } from 'redux';
import { playersData, playersHasErrors, playersIsLoading } from './players';

const reducersContainer = combineReducers({
    playersHasErrors, 
    playersIsLoading, 
    playersData
  });

export default reducersContainer;