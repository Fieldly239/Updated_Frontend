import {
  KNOWLEDGE_FETCHING,
  KNOWLEDGE_SUCCESS,
  KNOWLEDGE_FAILED,
  KNOWLEDGE_BY_ID_SUCCESS,
} from "../../constants";

const initialState = {
  result: null,
  isFetching: false,
  isError: false,
  loading: true,
  data: null,
};

const KnowledgeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case KNOWLEDGE_FETCHING:
      return {
        ...state,
        result: null,
        isFetching: true,
        isError: false,
        loading: true,
      };
    case KNOWLEDGE_SUCCESS:
      return {
        ...state,
        result: payload,
        isFetching: false,
        isError: false,
        loading: false,
      };
    case KNOWLEDGE_FAILED:
      return {
        ...state,
        result: null,
        isFetching: false,
        isError: true,
        loading: false,
      };
    case KNOWLEDGE_BY_ID_SUCCESS:
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

export default KnowledgeReducer;
