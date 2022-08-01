import {
  HOME_FETCHING,
  HOME_SUCCESS,
  HOME_FAILED,
  HOME_BY_ID_SUCCESS,
  server,
  apiUrl,
} from "../../constants";
import { httpClient } from "../../utils/Api";

export const setHomeFetchingToState = () => ({
  type: HOME_FETCHING,
});

export const setBranchSuccessToState = (payload) => ({
  type: HOME_SUCCESS,
  payload,
});

export const setBranchFailedToState = (payload) => ({
  type: HOME_FAILED,
  payload,
});

export const setStateToByIdSuccess = (payload) => ({
  type: HOME_BY_ID_SUCCESS,
  payload,
});

export const loadHome = () => {
  return async (dispatch) => {
    dispatch(setHomeFetchingToState());
    await doLoadHome(dispatch);
  };
};

const doLoadHome = async (dispatch) => {
  try {
    const res = await httpClient.get(`${apiUrl}/${server.HOME_URL}`);
    dispatch(setBranchSuccessToState(res.data));
  } catch (e) {
    dispatch(setBranchFailedToState("Failed"));
  }
};
