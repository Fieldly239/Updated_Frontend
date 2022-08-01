import {
  FILEATTACHMENT_FETCHING,
  FILEATTACHMENT_SUCCESS,
  FILEATTACHMENT_FAILED,
  FILEATTACHMENT_BY_ID_SUCCESS,
} from "../../constants";

const initialState = {
  result: null,
  isFetching: false,
  isError: false,
  data: null,
};

const Home = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILEATTACHMENT_FETCHING:
      return {
        ...state,
        result: null,
        isFetching: true,
        isError: false,
        loading: true,
      };
    case FILEATTACHMENT_SUCCESS:
      return {
        ...state,
        result: payload,
        isFetching: false,
        isError: false,
        loading: false,
      };
    case FILEATTACHMENT_FAILED:
      return {
        ...state,
        result: null,
        isFetching: false,
        isError: true,
        loading: false,
      };
    case FILEATTACHMENT_BY_ID_SUCCESS:
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

export default Home;
