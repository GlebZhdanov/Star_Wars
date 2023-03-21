import {
  PEOPLE_DATA_ERROR,
  PEOPLE_DATA_FILTERED,
  PEOPLE_DATA_POPUP,
  PEOPLE_DATA_REQUEST,
  PEOPLE_DATA_SUCCESS,
  TPeopleData,
} from './types/types';
import { TPeopleAction } from './actions/actions';

export const initialState: TPeopleData = {
  data: [],
  dataFiltered: [],
  dataPeoplePopup: {},
  dataLoading: false,
  dataError: null,
};

export const reducer = (state = initialState, action: TPeopleAction) => {
  switch (action.type) {
  case PEOPLE_DATA_REQUEST:
    return {
      ...state,
      dataLoading: false,
    };
  case PEOPLE_DATA_SUCCESS:
    return {
      ...state,
      data: action.payload.reduce((result, option) => {
        if (option.results) {
          return result.concat(option.results);
        }
      }, []),
      dataLoading: true,
    };
  case PEOPLE_DATA_ERROR:
    return {
      ...state,
      dataError: true,
      dataLoading: false,
    };
  case PEOPLE_DATA_FILTERED:
    return {
      ...state,
      dataFiltered: action.payload === 'All'
        ? state.data
        : state.data.filter((item) => item.eye_color === action.payload),
    };
  case PEOPLE_DATA_POPUP:
    return {
      ...state,
      dataPeoplePopup: action.payload,
    };

  default:
    return state;
  }
};
