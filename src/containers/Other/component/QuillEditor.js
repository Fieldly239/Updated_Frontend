import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = () => {
  const [state, setState] = useState({
    editorHtml: "This is the React-Quill Editor.",
  });

  const handleChange = (html) => {
    console.log(html);
    setState({
      ...state,
      editorHtml: html,
    });
  };

  return (
    <Grid item xs={12} md={12} sx={{ mt: 4 }}>
      <ReactQuill
      style={{fontSize:"39px"}}
        theme="snow"
        onChange={handleChange}
        value={state.editorHtml}
        formats={{
          formats: [
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "video",
          ],
        }}
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["clean"],  
          ],
        }}
      />
    </Grid>
  );
};

export default QuillEditor;
