import {
  KNOWLEDGE_FETCHING,
  KNOWLEDGE_SUCCESS,
  KNOWLEDGE_FAILED,
  KNOWLEDGE_BY_ID_SUCCESS,
  server,
  apiUrl,
} from "../../constants";
import { httpClient } from "../../utils/Api";

export const setKnowledgeFetchingToState = () => ({
  type: KNOWLEDGE_FETCHING,
});

export const setKnowledgeSuccessToState = (payload) => ({
  type: KNOWLEDGE_SUCCESS,
  payload,
});

export const setKnowledgeFailedToState = (payload) => ({
  type: KNOWLEDGE_FAILED,
  payload,
});

const setStateToByIdSuccess = (payload) => ({
  type: KNOWLEDGE_BY_ID_SUCCESS,
  payload,
});

export const loadKnowledges = () => {
  return async (dispatch) => {
    dispatch(setKnowledgeFetchingToState());
    await doLoadKnowledges(dispatch);
  };
};

export const loadTopListKnowledges = () => {
  return async (dispatch) => {
    dispatch(setKnowledgeFetchingToState());
    await doLoadTopListKnowledges(dispatch);
  };
};

export const getKnowledge = (id) => {
  return (dispatch) => {
    dispatch(setKnowledgeFetchingToState());
    getKnowledgeInfoById(dispatch, id);
  };
};


const doLoadKnowledges = async (dispatch) => {
  try {
    const res = await httpClient.get(`${apiUrl}/${server.KNOWLEDGE_URL}`);
    if (res.data.isSuccess) {
      dispatch(setKnowledgeSuccessToState(res.data));
    } else {
      dispatch(setKnowledgeFailedToState());
    }
  } catch (e) {
    console.log(e);
    dispatch(setKnowledgeFailedToState());
  }
};

const doLoadTopListKnowledges = async (dispatch) => {
  try {
    const res = await httpClient.get(
      `${apiUrl}/${server.KNOWLEDGE_URL}/gettopknowledge`
    );
    if (res.data.isSuccess) {
      dispatch(setKnowledgeSuccessToState(res.data));
    } else {
      dispatch(setKnowledgeFailedToState());
    }
  } catch (e) {
    console.log(e);
    dispatch(setKnowledgeFailedToState());
  }
};

const addKnowledges = async (dispatch, payload) => {
  try {
    const res = await httpClient.post(
      `${apiUrl}/${server.KNOWLEDGE_URL}/${server.KNOWLEDGE_URL}`, payload
    );
    if (res.data.isSuccess) {
      dispatch(setKnowledgeSuccessToState(res.data));
    } else {
      dispatch(setKnowledgeFailedToState());
    }
  } catch (e) {
    console.log(e);
    dispatch(setKnowledgeFailedToState());
  }
};

export const getKnowledgeInfoById = (id) => {
  return async (dispatch) => {
    try {
      let res = await httpClient.get(
        `${apiUrl}/${server.server.KNOWLEDGE_URL}/${id}`
      );
      if (res.data.isSuccess) {
        dispatch(setKnowledgeSuccessToState(res.data));
      } else {
        dispatch(setKnowledgeFailedToState());
      }
    } catch (e) {
      console.log(e);
      dispatch(setKnowledgeFailedToState());
    }
  };
};

export const deleteKnowledge = (id) => {
  return async (dispatch) => {
    try {
      let res = await httpClient.delete(
        `${apiUrl}/${server.KNOWLEDGE_URL}/${id}`
      );
      return res.data;
    } catch (e) {
      dispatch(setKnowledgeFailedToState());
    }
  };
};
