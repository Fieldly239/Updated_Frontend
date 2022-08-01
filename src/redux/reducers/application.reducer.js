import {
    APPLICATION_FETCHING,
    APPLICATION_SUCCESS,
    APPLICATION_FAILED,
    APPLICATION_BY_ID_SUCCESS,
  } from "../../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,
    loading: true,
    data: null,
  };
  
  const ApplicationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case APPLICATION_FETCHING:
        return {
          ...state,
          result: null,
          isFetching: true,
          isError: false,
          loading: true,
        };
      case APPLICATION_SUCCESS:
        return {
          ...state,
          result: payload,
          isFetching: false,
          isError: false,
          loading: false,
        };
      case APPLICATION_FAILED:
        return {
          ...state,
          result: null,
          isFetching: false,
          isError: true,
          loading: false,
        };
      case APPLICATION_BY_ID_SUCCESS:
        return {
          ...state,
          data: payload,
          isFetching: false,
          isError: false,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default ApplicationReducer;
  