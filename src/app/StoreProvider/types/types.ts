import { ThunkAction, ThunkDispatch } from 'redux-thunk';
// import { roor } from './reducers';
import { rootReducer } from 'app/StoreProvider/config/reducers';
import { TPeopleAction } from 'redux/people/actions/actions';

type TApplicationActions = TPeopleAction;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  never,
  TApplicationActions
  >;
