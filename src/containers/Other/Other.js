import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Swal from "sweetalert2";
import ButtonComponent from "./component/Button";
import DropFiles from "./component/DropFiles";
import CKEditor from "./component/CkEditor";
import QuillEditor from "./component/QuillEditor";
import TinyEditor from "./component/TinyEditor";
import * as FileAccachmentAction from "../../redux/actions/fileAttachment.action";
import Typography from "@mui/material/Typography";

export default function Other(props) {
  const STATESFILE = {
    SELECT_OK: 0,
    FULL: 1,
    SUCCESS: 2,
  };

  const [state, setState] = useState({
    success: false,
    danger: false,
    warning: false,
    message: "",
    error: false,
    state: props.success ? STATESFILE.SUCCESS : STATESFILE.SELECT_OK,
    files: [],
    filesHas: [],
    loading: true,
    imgFile: "",
  });


  let dispatch = useDispatch();
  const fileAttachmentReducer = useSelector(
    (state) => state.fileAttachmentReducer
  );
  const fileAttachmentList = fileAttachmentReducer.result;

  useEffect(() => {
    dispatch(FileAccachmentAction.getFileAttachment("1234-5678-0000"));
  }, []);

  useEffect(() => {
    if (fileAttachmentList) {
      console.log(state.loading);
      if (fileAttachmentList.data.length > 0) {
        setTimeout(() => {
          setState({
            ...state,
            filesHas: fileAttachmentList.data,
            loading: false,
          });
        }, 500);
      } else {
        setTimeout(() => {
          setState({
            ...state,
            loading: false,
            filesHas: [],
          });
        }, 500);
      }
    }
  }, [fileAttachmentList]);

  /////SweetAlert///
  const handleConfirmCreate = () => {
    Swal.fire({
      title: "คุณต้องการบันทึกข้อมูลนี้ใช่หรือไม่",
      // text: "คุณต้องการเพิ่ม Knowledge ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText:
        "<div style='font-size:20px;font-family:ntlbold;font-weight:normal'>บันทึก</div>",
      cancelButtonText:
        "<div style='font-size:20px;font-family:ntlbold;font-weight:normal'>ยกเลิก</div>",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(FileAccachmentAction.Fileupload(state.files)).then((res) => {
          if (res.data && res.data.isSuccess) {
            setState({
              ...state,
              files: [],
            });
            dispatch(FileAccachmentAction.getFileAttachment("1234-5678-0000"));
            Swal.fire({
              icon: "success",
              title: "บันทึกข้อมูลสำเร็จ",
              showConfirmButton: false,
              timer: 1500,
            });
            // navigate("/branch");
          } else if (res.message && !res.data.isSuccess) {
            Swal.fire({
              icon: "error",
              title: "ผิดพลาด!",
              text: res.message,
            });
          } else {
          }
        });
      }
    });
  };

  const handleDeleteFile = (id) => {
    Swal.fire({
      title: "คุณต้องการลบไฟล์นี้ใช่หรือไม่",
      // text: "คุณต้องการเพิ่ม Knowledge ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText:
        "<div style='font-size:20px;font-family:ntlbold;font-weight:normal'>ตกลง</div>",
      cancelButtonText:
        "<div style='font-size:20px;font-family:ntlbold;font-weight:normal'>ยกเลิก</div>",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(FileAccachmentAction.deleteBranch(id)).then((res) => {
          if (res.data && res.isSuccess) {
            console.log(res);
            Swal.fire({
              icon: "success",
              title: "ลบข้อมูลสำรเร็จ",
              text: "ลบไฟล์ข้อมูลนี้แล้ว.",
              showConfirmButton: false,
              timer: 1500,
            });
            dispatch(FileAccachmentAction.getFileAttachment("1234-5678-0000"));
            // navigate("/branch");
          } else if (res.message && !res.data.isSuccess) {
            Swal.fire({
              icon: "error",
              title: "ผิดพลาด!",
              text: res.message,
            });
          } else {
          }
        });
      }
    });
  };

  /////FileAttachment///
  const onDrop = (acceptedFiles, rejectedFiles) => {
    const numberFiles =
      state.files.length + acceptedFiles.length + rejectedFiles.length;
    let files = state.files;

    if (errorFilesLength(numberFiles)) {
      reject(files);
      setState({
        ...state,
        state: STATESFILE.FULL,
      });
    } else {
      files = files.concat(acceptedFiles);
      setState({
        ...state,
        success: false,
        warning: false,
        danger: false,
        error: false,
        files: files,
        formData: state.formData,
        state: errorFilesLength(numberFiles + 1)
          ? STATESFILE.FULL
          : STATESFILE.SELECT_OK,
      });
    }
    console.log(files);
  };

  const remove = (file) => {
    setState((state) => {
      const files = state.files.filter((item) => item.name !== file.name);
      console.log(files);
      return {
        ...state,
        success: false,
        warning: false,
        danger: false,
        files,
      };
    });
  };

  const errorFilesLength = (numberFiles) => numberFiles > props.maxNumberFiles;

  const reject = (file) =>
    setState({ ...state, error: true, filesReject: file });


  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={12}>
          <Card sx={{ minWidth: "275px" }}>
            <CardContent>
              <DropFiles
            
                loading={state.loading}
                onDrop={onDrop}
                remove={remove}
                handleDeleteFile={handleDeleteFile}
                files={state.files}
                fileAttachmentList={state.filesHas}
                getFileInfoById={(param) =>
                  dispatch(FileAccachmentAction.getFileInfoById(param))
                }
              />
              <ButtonComponent handleConfirmCreate={handleConfirmCreate} />
              <CKEditor />
              <QuillEditor />
              <TinyEditor />
              <Typography
                className="mb-0"
                component="p"
                sx={{ fontSize: 18, color: "#000", m:1}}
                variant="body1"
                color="primary"
                dangerouslySetInnerHTML={{ __html: '<p style="text-align: center>1.นายธนสวัฒน์&nbsp; กลิ่นสอน</p><p style="text-align: center>1.นายธนสวัฒน์&nbsp; กลิ่นสอน</p><p style="text-align: center;">1.นายธนสวัฒน์&nbsp; กลิ่นสอน</p><p style="text-align: center;">1.นายธนสวัฒน์&nbsp; กลิ่นสอน</p><p><img src="data:image/jpeg;base64,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" alt="images.jfif" width="262" height="192"></p>' }}>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
