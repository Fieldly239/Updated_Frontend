import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CkEditor = () => {
  const [state, setState] = useState({
    imgFile: "This is the CKEditor.",
  });

  function uploadAdapter(loader) {
    return {
      upload: () => {
        console.log("loader", loader.file);
        loader.file.then((filess) => {
          console.log("loader", filess);

          // body.append("files", form);
        });
        return () => {
          const form = new FormData();
          loader.file.then((filess) => {
            console.log("loader", filess);

            // body.append("files", form);
          });
        };
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <Grid item xs={12} md={12} sx={{ mt: 4 }}>
      <CKEditor
        editor={ClassicEditor}
        data={state.imgFile}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          console.log("onDrop.", editor);
          console.log("onDrop.", event);

          const data = editor.getData();
          setState({
            ...state,
            imgFile: data,
          });
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
        onDrop={(event, editor) => {
          console.log("event.", event);

          console.log("onDrop.", editor);
        }}
        config={{
          extraPlugins: [uploadPlugin],
        }}
      />
    </Grid>
  );
};

export default CkEditor;
