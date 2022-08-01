import React, { useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import { Editor } from "@tinymce/tinymce-react";

const TinyEditors = () => {
  const [value, setValue] = useState('');
  const [text, setText] = useState('');
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  console.log(value);

  return (
    <Grid item xs={12} md={12} sx={{ mt: 4 }}>
      <input
        id="my-file"
        type="file"
        name="my-file"
        style={{ display: "none" }}
        onChange=""
        onClick={() => console.log("dddd")}
      />

      <Editor
        value={value}
        onInit={(evt, editor) => {
          setText(editor.getContent({ format: 'text' }));
        }}
        apiKey="de5e3f10po8vg7qxlkctos1k55u1bv2p7z6hhzc7jrf29lbf"
        // onInit={(evt, editor) => (editorRef.current = editor)}
        // initialValue="<p>This is the TinyMCE Editor.</p>"
        onEditorChange={(newValue, editor) => {
          console.log(newValue);
          console.log(editor.getContent({ format: 'text' }))

          setValue(newValue);
          setText(editor.getContent({ format: 'text' }));
        }}
        init={{
          height: 600,
          menubar: false,
          selector: "textarea#file-picker",
          image_title: true,
          automatic_uploads: true,
          file_picker_types: "image",
          content_css: "//www.tinymce.com/css/codepen.min.css",
          paste_data_images: true,
          file_picker_callback: function (callback, value, meta) {
            if (meta.filetype === "image") {
              var input = document.getElementById("my-file");
              input.click();
              input.onchange = function () {
                var file = input.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                  console.log("name", e.target.result);
                  callback(e.target.result, {
                    alt: file.name,
                  });
                };
                reader.readAsDataURL(file);
              };
            }
          },
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
            "image",
          ],
          menu: {
            file: {
              title: "File",
              items:
                "newdocument restoredraft | preview | export print | deleteallconversations",
            },
            edit: {
              title: "Edit",
              items:
                "undo redo | cut copy paste pastetext | selectall | searchreplace",
            },
            view: {
              title: "View",
              items:
                "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments",
            },
            insert: {
              title: "Insert",
              items:
                "image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime",
            },
            format: {
              title: "Format",
              items:
                "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat",
            },
            tools: {
              title: "Tools",
              items:
                "spellchecker spellcheckerlanguage | a11ycheck code wordcount",
            },
            table: {
              title: "Table",
              items:
                "inserttable | cell row column | advtablesort | tableprops deletetable",
            },
            help: { title: "Help", items: "help" },
          },
          menubar: "file edit view insert format tools table help",
          setup: function (editor) {
            editor.ui.registry.addMenuItem("myCustomMenuItem", {
              text: "My Custom Menu Item",
              onAction: function () {
                alert("Menu item clicked");
              },
            });
          },
          statusbar: false,
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help|" +
            " link image | code",

          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
        }}
      />
    </Grid>
  );
};

export default TinyEditors;
