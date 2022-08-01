import {
  FILEATTACHMENT_FETCHING,
  FILEATTACHMENT_SUCCESS,
  FILEATTACHMENT_FAILED,
  FILEATTACHMENT_BY_ID_SUCCESS,
  server,
  apiUrl,
  apiUrlimage,
} from "../../constants";
import { httpClient } from "../../utils/Api";

export const setStateFileAttachmentToSuccess = (payload) => ({
  type: FILEATTACHMENT_SUCCESS,
  payload,
});

export const setStateFileAttachmentByIdToSuccess = (payload) => ({
  type: FILEATTACHMENT_BY_ID_SUCCESS,
  payload,
});

export const setStateFileAttachmentToFetching = () => ({
  type: FILEATTACHMENT_FETCHING,
});

export const setStateFileAttachmentToFailed = () => ({
  type: FILEATTACHMENT_FAILED,
});

export const getFileAttachment = (id) => {
  return (dispatch) => {
    dispatch(setStateFileAttachmentToFetching());
    loadFileAttachment(dispatch, id);
  };
};

const loadFileAttachment = async (dispatch, id) => {
  try {
    let res = await httpClient.get(
      `${apiUrl}/${server.FILEATTACHMENT_URL}/getallbykmid?kmid=${id}`
    );
    dispatch(setStateFileAttachmentToSuccess(res.data));
    return res.data;
  } catch (err) {
    alert(JSON.stringify(err));
    dispatch(setStateFileAttachmentToFailed());
  }
};

export const getFileInfoById = (id) => {
  return async (dispatch) => {
    try {
      let res = await httpClient.get(
        `${apiUrl}/${server.FILEATTACHMENT_URL}/getfileinfo/${id}`
      );
      if (res.data.isSuccess) {
        let Url = apiUrlimage + "/" + res.data.data;
        window.open(Url, null);
      }
      return res.data;
    } catch (err) {
      alert(JSON.stringify(err));
      dispatch(setStateFileAttachmentToFailed());
    }
  };
};

export const Fileupload = (files) => {
  return async (dispatch) => {
    try {
      var res;
      for (var index = 0; index < files.length; index++) {
        var element = files[index];
        console.log(element);
        let _keyName = "1234-5678-0000";
        let _modifiedBy = "Thanawat Klinson";
        let formFile = new FormData();
        formFile.append("FK_KMId", _keyName);
        formFile.append("fileName", element.fileName);
        formFile.append("fileExtension", element.fileExtension);
        formFile.append("createdBy", _modifiedBy);
        formFile.append("formFiles", element);

        res = await httpClient.post(
          `${apiUrl}/${server.FILEATTACHMENT_URL}/fileupload`,
          formFile,
          { headers: { "content-type": "multipart/form-data" } }
        );
      }
      return res;
    } catch (error) {
      dispatch(setStateFileAttachmentToFailed());
      console.log("Error****:", error.message);
    }
  };
};

export const deleteBranch = (id) => {
  return async (dispatch) => {
    try {
      let res = await httpClient.delete(
        `${apiUrl}/${server.FILEATTACHMENT_URL}/${id}`
      );
      return res.data;
    } catch (e) {
      dispatch(setStateFileAttachmentToFailed());
    }
  };
};
