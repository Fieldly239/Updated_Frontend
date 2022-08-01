import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Dropzone from "react-dropzone";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CircularProgress from "@mui/material/CircularProgress";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export default function DropFiles(props) {
  const getfiles =
    props.fileAttachmentList.length > 0
      ? props.fileAttachmentList.map((file) => (
          <Box>
            <Paper
              key={file.name}
              elevation={3}
              sx={{
                textAlign: "center",
                height: 90,
                width: 70,
                lineHeight: "60px",
                borderRadius: 3,
              }}
            >
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Grid container justifyContent="flex-end">
                    <IconButton
                      size="small"
                      onClick={() => props.handleDeleteFile(file.id)}
                    >
                      <DeleteIcon fontSize="inherit" color="btRed" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <IconButton
                size="large"
                onClick={() => props.getFileInfoById(file.id)}
                sx={{ mt: -3 }}
              >
                <Tooltip title={"ดูไฟล์"}>
                  <AttachFileIcon fontSize="large" color="secondary" />
                </Tooltip>
              </IconButton>
            </Paper>
            <Tooltip title={file.fileName + file.fileExtension}>
              <Box
                className="text-truncate"
                sx={{
                  width: 80,
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                <Typography component="span" sx={{ fontSize: 15, mt: 4 }}>
                  {" "}
                  {file.fileName + file.fileExtension}
                </Typography>
              </Box>
            </Tooltip>
          </Box>
        ))
      : [];

  const filesList = props.files
    ? props.files.map((file) => (
        <Box>
          <Paper
            key={file.name}
            elevation={3}
            sx={{
              textAlign: "center",
              height: 90,
              width: 70,
              lineHeight: "60px",
              borderRadius: 3,
            }}
          >
            <Grid container>
              <Grid item xs={12} md={12}>
                <Grid container justifyContent="flex-end">
                  <IconButton size="small" onClick={() => props.remove(file)}>
                    <DeleteIcon fontSize="inherit" color="btRed" />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <FileUploadIcon fontSize="large" color="secondary" />
          </Paper>
          <Tooltip title={file.name}>
            <Box
              className="text-truncate"
              sx={{
                width: 80,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              <Typography component="span" sx={{ fontSize: 15, mt: 4 }}>
                {" "}
                {file.name}
              </Typography>
            </Box>
          </Tooltip>
        </Box>
      ))
    : [];

  return (
    <Box sx={{ width: "100%" }}>
      <Grid item xs={12} md={12} sx={{ mt: 5 }}>
        <Dropzone
          accept=".jpeg, .jpg, .png, .bmp, .gif, .txt, .pdf, .xls, .xlsx, .doc, .docx, .zip, .7z, .msg"
          maxSize={10485760}
          onDrop={props.onDrop}
        >
          {({ getRootProps, getInputProps }) => (
            <Box>
              <Grid
                sx={{ p: 1, margin: 1 }}
                {...getRootProps()}
                justifyContent="center"
              >
                <input {...getInputProps()} />
                <Typography
                  sx={{
                    m: 10,
                    p: 2,
                    color: "grey.800",
                    border: "2px dashed",
                    borderColor: "grey.500",
                    borderRadius: 2,
                    fontSize: 20,
                    fontWeight: "300",
                    cursor: "pointer",
                  }}
                  component="span"
                >
                  คลิกเพื่อเลือกไฟล์
                </Typography>
              </Grid>
              <Grid container justifyContent="center">
                <Typography component="span" sx={{ fontSize: 14, mt: 1 }}>
                  ( ไฟล์ที่รองรับ : .png, .jpg, .jpeg, .gif, .bmp, .txt, .xls,
                  .xlsx, .doc, .docx, .pdf, .zip, .7z, .msg
                  ขนาดไฟล์ที่รองรับไม่เกิน 10 MB)
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent="center"
                spacing={0.5}
                sx={{ mt: 3 }}
              >
                {!props.loading || props.fileAttachmentList.length > 0 ? (
                  getfiles
                ) : props.fileAttachmentList ? (
                  <CircularProgress color="btadd" />
                ) : null}
                {props.files.length > 0 ? (
                  <Box
                    justifyContent={"center"}
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        width: 90,
                        height: 130,
                      },
                    }}
                  >
                    {filesList}
                  </Box>
                ) : (
                  ""
                )}
              </Grid>
            </Box>
          )}
        </Dropzone>
      </Grid>
    </Box>
  );
}
