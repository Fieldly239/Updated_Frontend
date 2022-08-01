import {
    CATEGORY_FETCHING,
    CATEGORY_SUCCESS,
    CATEGORY_FAILED,
    CATEGORY_BY_ID_SUCCESS,
  } from "../../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,
    loading: true,
    data: null,
  };
  
  const CategoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case CATEGORY_FETCHING:
        return {
          ...state,
          result: null,
          isFetching: true,
          isError: false,
          loading: true,
        };
      case CATEGORY_SUCCESS:
        return {
          ...state,
          result: payload,
          isFetching: false,
          isError: false,
          loading: false,
        };
      case CATEGORY_FAILED:
        return {
          ...state,
          result: null,
          isFetching: false,
          isError: true,
          loading: false,
        };
      case CATEGORY_BY_ID_SUCCESS:
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
  
  export default CategoryReducer;
  