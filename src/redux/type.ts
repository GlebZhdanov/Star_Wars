import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { rootReducer } from './reducers';
import { TPeopleAction } from './people/actions/actions';

type TApplicationActions = TPeopleAction;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  never,
  TApplicationActions
  >;
