export const PEOPLE_DATA_SUCCESS: 'PEOPLE_DATA_SUCCESS' = 'PEOPLE_DATA_SUCCESS';
export const PEOPLE_DATA_REQUEST: 'PEOPLE_DATA_REQUEST' = 'PEOPLE_DATA_REQUEST';
export const PEOPLE_DATA_ERROR: 'PEOPLE_DATA_ERROR' = 'PEOPLE_DATA_ERROR';
export const PEOPLE_DATA_FILTERED: 'PEOPLE_DATA_FILTERED' = 'PEOPLE_DATA_FILTERED';
export const PEOPLE_DATA_POPUP: 'PEOPLE_DATA_POPUP' = 'PEOPLE_DATA_POPUP';

export interface TPeopleData {
  data: Array<any>,
  dataFiltered: Array<any>,
  dataPeoplePopup: any,
  dataLoading: boolean | null,
  dataError: boolean | null,
}
