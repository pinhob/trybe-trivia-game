import { combineReducers } from 'redux';
import player from './player';
import ranking from './ranking';
import questions from './questions';

const rootReducer = combineReducers({ player, ranking, questions });

export default rootReducer;
