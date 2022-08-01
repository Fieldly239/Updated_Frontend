import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as categoryActions from "../../../redux/actions/category.action";
import * as appliactionActions from "../../../redux/actions/application.action";
import * as knowledgeAction from "../../../redux/actions/knowledge.action";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Autocomplete from '@mui/material/Autocomplete';
import * as Yup from "yup";

const AddInfo = () => {

  let navigate = useNavigate();
  let dispatch = useDispatch();
  const applications = useSelector((state) => state.applications);
  const categories = useSelector((state) => state.categories);
  const applicationList = applications.result;
  const categoriesList = categories.result;

  useEffect(() => {
    dispatch(categoryActions.loadCategories());
    dispatch(appliactionActions.loadApplications());
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Formik
        enableReinitialize
        initialValues={{ title: "", category: "", application: "", description: ""}}
        validationSchema={Yup.object().shape({
          title: Yup.string().required("Required"),
          category: Yup.object().required("Required"),
          application: Yup.object().required("Required"),
          description: Yup.string().required("Required"),

        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}

      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={5} justifyContent="center" sx={{ mb: 2 }}>
              <Grid container item xs={12} md={12}>
                <Grid container item xs={12} md={12}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Title</Typography>&nbsp;
                  <Typography color="red" sx={{ fontWeight: 'bold' }}>*</Typography>&nbsp;
                  <Typography variant="subtitle1" color="red" sx={{ fontWeight: 'bold' }}>{errors.title && touched.title && errors.title}</Typography>
                </Grid>
                <TextField id="outlined-required"
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title || ""}
                  error={
                    touched.title && Boolean(errors.title)
                  }
                  placeholder="ใส่ Title"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 10,
                    borderColor: "#8A8887",
                    boxShadow: 0,
                  }}
                  margin="dense"
                  size="small"
                  variant="outlined"
                  fullWidth
                  color="textfield" /><br />
              </Grid>
            </Grid>


            <Grid container spacing={5} direction="row" justifyContent="center" sx={{ mb: 2 }}>
              <Grid container spacing={2} item xs={12} md={12} textAlign="left">
                <Grid container item xs={6} fullWidth>
                  <Grid container item xs={6} fullWidth >
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      Category
                    </Typography>&nbsp;
                    <Typography color="red" sx={{ fontWeight: 'bold' }}>*</Typography>&nbsp;
                    <Typography variant="subtitle1" color="red" sx={{ fontWeight: 'bold' }}>{errors.category && touched.category && errors.category}</Typography>
                  </Grid>
                  <FormControl fullWidth size="small">
                    <Autocomplete
                      id="category"
                      name="category"
                      size="small"
                      value={values.category || ""}
                      options={categoriesList ?
                        categoriesList.data : []}
                      getOptionLabel={(option) =>
                        option.name ? option.name : ""
                      }
                      onChange={(e, values) => setFieldValue("category", values)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="category"
                          fullWidth
                          margin="dense"
                          placeholder="-- เลือก Category --"
                          error={
                            touched.category && Boolean(errors.category)
                          }
                        />
                      )}
                    />
                  </FormControl><br />
                </Grid>

                <Grid container item xs={6} fullWidth >
                  <Grid container item xs={6} fullWidth >
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} >
                      Application
                    </Typography>
                  </Grid>
                  <FormControl fullWidth size="small">
                    <Autocomplete
                      id="application"
                      name="application"
                      size="small"
                      value={values.application || ""}
                      options={applicationList ?
                        applicationList.data : []}
                      getOptionLabel={(option) =>
                        option.name ? option.name : ""
                      }
                      onChange={(e, values) => setFieldValue("application", values)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="application"
                          fullWidth
                          margin="dense"
                          placeholder="-- เลือก Application --" 
                        />
                      )}
                    />
                  </FormControl><br />
                </Grid><br />
              </Grid>
            </Grid>

            <Grid container spacing={5} justifyContent="center" sx={{ mb: 2 }}>
              <Grid container item xs={12} md={12}>
                <Grid container item xs={12} md={12}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Descriptions
                  </Typography>&nbsp;
                  <Typography color="red" sx={{ fontWeight: 'bold' }}>*</Typography>&nbsp;
                  <Typography variant="subtitle1" color="red" sx={{ fontWeight: 'bold' }}>{errors.description && touched.description && errors.description}</Typography>
                </Grid>
                <TextField id="outlined-required"
                  type="text"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  error={errors.description && touched.description && errors.description}
                  placeholder="ใส่ Descriptions"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 10,
                    borderColor: "#8A8887",
                    boxShadow: 0,
                  }}
                  multiline
                  rows={4}
                  margin="dense"
                  size="small"
                  variant="outlined"
                  fullWidth
                  color="textfield" /><br />
              </Grid>
            </Grid>


            {/* <Grid container spacing={5} justifyContent="center">
              <Grid container item xs={12} md={12}>
                <Grid container item xs={12} md={12}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Attach File
                  </Typography>&nbsp;
                  <Typography color="red" sx={{ fontWeight: 'bold' }}>*</Typography>
                  <Typography variant="subtitle1" color="red" sx={{ fontWeight: 'bold'}}>{errors.attachFile && touched.attachFile && errors.attachFile}</Typography>
                </Grid>
                <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={12} md={12}>
                    <Card sx={{ minWidth: "275px", border: 1, borderColor: "#bdbdbd", background: "#f5f5f5" }}>
                      <CardContent>
                        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}
                          accept=".jpeg, .jpg, .png, .bmp, .gif, .txt, .pdf, .xls, .xlsx, .doc, .docx, .zip, .7z, .msg"
                          maxSize={10485760}
                        >
                          {({ getRootProps, getInputProps }) => (

                            <Grid {...getRootProps()}>
                              <input {...getInputProps()} />
                              <p><Typography variant="h6" gutterBottom component="div">คลิกเพื่อเลือกไฟล์</Typography></p>
                            </Grid>
                          )}
                        </Dropzone>
                      </CardContent>
                    </Card>
                    <Typography variant="caption" color="#757575">( ไฟล์ที่รองรับ : .png, .jpg, .jpeg, .gif, .bmp, .txt, .xls, .xlsx, .doc, .docx, .pdf, .zip, .7z, .msg ขนาดไฟล์ที่รองรับไม่เกิน 10 MB )</Typography>
                  </Grid>
                </Grid>
                <br />
              </Grid>
            </Grid>
            <br /> */}

            <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ mt: 2 }}>
              <Button
                size="medium"
                variant="contained"
                sx={{ mr: 2, pl: 4, pr: 4, background: "#0b8457" }}
                // disabled={isSubmitting}
                type="submit"
                // onClick={() => { resetForm() }}
              >
                <Typography color="#fff">บันทึก</Typography>
              </Button>
              <Button
                size="medium"
                variant="contained"
                color="btRed"
                sx={{ mr: 2, pl: 4, pr: 4 }}
                onClick={() => navigate('/knowledge', { replace: true })}
              >
                <Typography color="#fff">ยกเลิก</Typography>
              </Button>
            </Stack>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default AddInfo
