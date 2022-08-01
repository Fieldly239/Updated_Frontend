import {
  APPLICATION_FETCHING,
  APPLICATION_SUCCESS,
  APPLICATION_FAILED,
  APPLICATION_BY_ID_SUCCESS,
  server,
  apiUrl,
} from "../../constants";
import { httpClient } from "../../utils/Api";

export const setApplicationsFetchingToState = () => ({
  type: APPLICATION_FETCHING,
});

export const setApplicationsSuccessToState = (payload) => ({
  type: APPLICATION_SUCCESS,
  payload,
});

export const setApplicationsFailedToState = (payload) => ({
  type: APPLICATION_FAILED,
  payload,
});

const setStateToByIdSuccess = (payload) => ({
  type: APPLICATION_BY_ID_SUCCESS,
  payload,
});

export const loadApplications = () => {
  return async (dispatch) => {
    dispatch(setApplicationsFetchingToState());
    await doLoadApplications(dispatch);
  };
};

const doLoadApplications = async (dispatch) => {
  try {
    console.log(`${apiUrl}/${server.APPLICATION_URL}`);
    const res = await httpClient.get(
      `${apiUrl}/${server.APPLICATION_URL}`
    );
    if (res.data.isSuccess) {
      dispatch(setApplicationsSuccessToState(res.data));
    } else {
      dispatch(setApplicationsFailedToState());
    }
  } catch (e) {
    console.log(e);
    dispatch(setApplicationsFailedToState());
  }
};
