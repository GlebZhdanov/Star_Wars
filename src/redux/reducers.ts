import { combineReducers } from 'redux';
import { reducer as peopleReducers } from './people/reducer';

export const rootReducer = combineReducers({
  people: peopleReducers,
});
