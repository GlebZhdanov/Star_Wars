import { AppDispatch, AppThunk } from 'app/StoreProvider/types/types';
import { api } from 'shared/api/api';
import {
  PEOPLE_DATA_SUCCESS,
  PEOPLE_DATA_REQUEST,
  PEOPLE_DATA_ERROR,
  PEOPLE_DATA_FILTERED,
  PEOPLE_DATA_POPUP,
} from '../types/types';

export interface ILoadPeopleRequestAction {
  readonly type: typeof PEOPLE_DATA_REQUEST;
}

export interface ILoadPeopleSuccessAction {
  readonly type: typeof PEOPLE_DATA_SUCCESS;
  payload: Array<any>;
}

export interface ILoadPeopleFailedAction {
  readonly type: typeof PEOPLE_DATA_ERROR;
}

export interface IFilteredPeopleData {
  readonly type: typeof PEOPLE_DATA_FILTERED;
  payload: string;
}

export interface ILoadPeoplePopupAction {
  readonly type: typeof PEOPLE_DATA_POPUP;
  payload: Array<any>;
}

export type TPeopleAction =
  | ILoadPeopleRequestAction
  | ILoadPeopleSuccessAction
  | ILoadPeopleFailedAction
  | IFilteredPeopleData
  | ILoadPeoplePopupAction

export const loadPeopleRequestAction = () : ILoadPeopleRequestAction => ({
  type: PEOPLE_DATA_REQUEST,
});

export const loadPeopleSuccessAction = (data: any) : ILoadPeopleSuccessAction => ({
  type: PEOPLE_DATA_SUCCESS,
  payload: data,
});

export const loadPeopleFailedAction = () : ILoadPeopleFailedAction => ({
  type: PEOPLE_DATA_ERROR,
}
);

export const sortPeople = (value: string) : IFilteredPeopleData => ({
  type: PEOPLE_DATA_FILTERED,
  payload: value,
});

export const peoplePopup = (data: any): ILoadPeoplePopupAction => ({
  type: PEOPLE_DATA_POPUP,
  payload: data,
});

export const loadPeople = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(loadPeopleRequestAction());
  return api.getLoadDataPeople()
    .then((res) => {
      dispatch(loadPeopleSuccessAction(res));
      dispatch(sortPeople('All'));
    })
    .catch((err) => {
      dispatch(loadPeopleFailedAction());
    });
};
