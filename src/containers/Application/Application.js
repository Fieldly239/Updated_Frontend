import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as homeActions from "../../redux/actions/home.action";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { DataGrid } from "@mui/x-data-grid";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import * as appliactionActions from "../../redux/actions/application.action";

const columns = [
  { field: "id", headerName: "ลำดับ", width: 90 },
  {
    renderHeader: () => <strong>{"ชื่อ Application"}</strong>,
    field: "lastName",
    width: 400,
    editable: true,
  },
  {
    field: "firstName",
    headerName: "สร้างโดย",
    width: 300,
    editable: true,
  },
  {
    field: "age",
    headerName: "วันที่สร้าง",
    // type: "number",
    width: 200,
    editable: true,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const rows = [
  {
    id: 1,
    lastName: "AS400",
    firstName: "Thanawat Klinson",
    age: "15/01/2022",
  },
  {
    id: 2,
    lastName: "SmartCare",
    firstName: "Thanawat Klinson",
    age: "15/01/2022",
  },
  {
    id: 3,
    lastName: "ServiceDeskLog",
    firstName: "Thanawat Klinson",
    age: "15/01/2022",
  },
  {
    id: 4,
    lastName: "ITAssetManager",
    firstName: "Thanawat Klinson",
    age: "15/01/2022",
  },
  {
    id: 5,
    lastName: "SelfServiceUnlock",
    firstName: "Thanawat Klinson",
    age: "15/01/2022",
  },
  {
    id: 5,
    lastName: "BotCCTV60Day",
    firstName: "Thanawat Klinson",
    age: "15/01/2022",
  },
];

const data = [
  { label: "Catagory", year: 1994 },
  { label: "Application", year: 1972 },
];

export default function Applcation() {
  const [pageSize, setPageSize] = React.useState(5);
  const dispatch = useDispatch();
  let navigate = useNavigate();


  useEffect(() => {
    dispatch(homeActions.loadHome());
    dispatch(appliactionActions.loadApplications());
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ width: "100%" }}>
      <Box mb={1}>
        <Card sx={{ minWidth: "275px" }}>
          <CardContent
            sx={{
              bgcolor: "#fff",
              textAlign: "left",
              color: "black",
              p: 2,
              mb: -1,
            }}
          >
            <Typography variant="h5" sx={{ ml: 2 }}>
              Application
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={12}>
          <Card sx={{ minWidth: "275px" }}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={0} md={4}></Grid>
                <Grid item xs={6} md={6}>
                  <Paper
                    onSubmit={() => alert("action")}
                    onClick={() => {
                      navigate("/search", { replace: true });
                    }}
                    component="form"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 10,
                      border: 1.7,
                      borderColor: "#C7C5C4",
                      boxShadow: 0,
                      mb: 1,
                    }}
                    margin="dense"
                  >
                    <IconButton
                      size="small"
                      // type="submit"
                      // sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon fontSize="small" />
                    </IconButton>
                    <InputBase
                      sx={{ flex: 1 }}
                      placeholder="Knowladge Search"
                      inputProps={{ "aria-label": "search google maps" }}
                      size="small"
                      // onFocus={() => setColorFocus(true)}
                      // onMouseLeave={() => setColorFocus(false)}
                      onChange={(e) => console.log(e.target.value)}
                      autoFocus
                    />
                  </Paper>
                  {/* <TextField
                    sx={{
                      // p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 10,
                      // border: 1,
                      borderColor: "#8A8887",
                      boxShadow: 0,
                    }}  
                    // sx={{ m: 1 }}
                    margin="dense"
                    size="small"
                    id="outlined-basic"
                    label="ค้นหา Knowladge"
                    variant="outlined"
                    fullWidth
                    autoFocus
                    color="textfield"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}/> */}
                </Grid>
                <Grid item xs={5} md={2}>
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<AddIcon sx={{ color: "#fff" }} />}
                    color="btadd"
                    onClick={() => {
                      navigate("/addknowledge", { replace: true });
                    }}
                  >
                    <Typography component="div" color="#fff">
                      Add new
                    </Typography>
                  </Button>
                </Grid>
              </Grid>

              {/* <Grid container spacing={3}>
                <Grid item xs={12} md={8} sx={{ flexGrow: 1 }}></Grid>
                <Grid item xs={3} md={1}>
                  <Typography sx={{ mt: 2, mr: -5 }}>View By :</Typography>
                </Grid>
                <Grid item xs={9} md={3}>
                  <Autocomplete
                    defaultValue={data[0]}
                    disablePortal
                    id="combo-box-demo"
                    size="small"
                    options={data}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      px: [1],
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="textfield"
                        fullWidth
                        margin="dense"
                        label="เลือกหัวข้อ KM"
                      />
                    )}
                  />
                </Grid>
              </Grid> */}
              <Grid container spacing={1} sx={{ mt: 2 }}>
                <Grid item xs={12} md={12}>
                  <Card sx={{ minWidth: "275px" }}>
                    {/* <CardHeader
                      sx={{
                        bgcolor: "#E3E3E3",
                        textAlign: "left",
                        color: "black",
                        p: 0.7,
                      }}
                      action={
                        <IconButton
                          sx={{ color: "white" }}
                          aria-label="settings"
                        >
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={
                        <Typography variant="h6" sx={{ ml: 2 }}>
                          Application
                        </Typography>
                      }
                    /> */}

                    <Box sx={{ height: 380, width: "100%" }}>
                      <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={pageSize}
                        rowsPerPageOptions={[5, 10, 50]}
                        onPageSizeChange={(newPageSize) =>
                          setPageSize(newPageSize)
                        }
                        pagination
                        // sx={{
                        //     boxShadow: 5,
                        //     // border: 2,
                        //     // borderColor: 'primary.light',
                        //     '& .MuiDataGrid-cell:hover': {
                        //       color: 'primary.main',
                        //     },
                        // }}
                        // checkboxSelection
                        // disableSelectionOnClick
                      />
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
