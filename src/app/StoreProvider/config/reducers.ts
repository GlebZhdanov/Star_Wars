import { combineReducers } from 'redux';
import { reducer as peopleReducer } from 'redux/people/reducer';

export const rootReducer = combineReducers({
  people: peopleReducer,
});
