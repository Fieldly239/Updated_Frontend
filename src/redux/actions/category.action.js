import {
  CATEGORY_FETCHING,
  CATEGORY_SUCCESS,
  CATEGORY_FAILED,
  CATEGORY_BY_ID_SUCCESS,
  server,
  apiUrl,
} from "../../constants";
import { httpClient } from "../../utils/Api";

export const setCategoriesFetchingToState = () => ({
  type: CATEGORY_FETCHING,
});

export const setCategoriesSuccessToState = (payload) => ({
  type: CATEGORY_SUCCESS,
  payload,
});

export const setCategoriesFailedToState = (payload) => ({
  type: CATEGORY_FAILED,
  payload,
});

const setStateToByIdSuccess = (payload) => ({
  type: CATEGORY_BY_ID_SUCCESS,
  payload,
});

export const loadCategories = () => {
  return async (dispatch) => {
    dispatch(setCategoriesFetchingToState());
    await doLoadCategories(dispatch);
  };
};

const doLoadCategories = async (dispatch) => {
  try {
    const res = await httpClient.get(`${apiUrl}/${server.CATEGORY_URL}`);
    if (res.data.isSuccess) {
      dispatch(setCategoriesSuccessToState(res.data));
    } else {
      dispatch(setCategoriesFailedToState());
    }
  } catch (e) {
    console.log(e);
    dispatch(setCategoriesFailedToState());
  }
};
