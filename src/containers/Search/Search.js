import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as homeActions from "../../redux/actions/home.action";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import { DataGrid } from "@mui/x-data-grid";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import PersonIcon from "@mui/icons-material/Person";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const datakm = [
  {
    title: "แก้ไขปัญหา AS 400 error เดี่ยงบ่อย",
    date: "15/07/2022",
    createBy: "Thanawat Klison",
    app: "AS400",
    cat: "How t0",
  },
  {
    title: "แก้ไขปัญหา AS 400 error เดี่ยงบ่อย",
    date: "15/07/2022",
    createBy: "Thanawat Klison",
    app: "AS400",
    cat: "How t0",
  },
  {
    title: "แก้ไขปัญหา AS 400 error เดี่ยงบ่อย",
    date: "15/07/2022",
    createBy: "Thanawat Klison",
    app: null,
    cat: "How t0",
  },
  {
    title: "แก้ไขปัญหา AS 400 error เดี่ยงบ่อย",
    date: "15/07/2022",
    createBy: "Thanawat Klison",
    app: "AS400",
    cat: "How t0",
  },
  {
    title: "แก้ไขปัญหา AS 400 error เดี่ยงบ่อย",
    date: "15/07/2022",
    createBy: "Thanawat Klison",
    app: null,
    cat: "How t0",
  },
  {
    title: "แก้ไขปัญหา AS 400 error เดี่ยงบ่อย",
    date: "15/07/2022",
    createBy: "Thanawat Klison",
    app: "AS400",
    cat: "How t0",
  },
  {
    title: "แก้ไขปัญหา AS 400 error เดี่ยงบ่อย",
    date: "15/07/2022",
    createBy: "Thanawat Klison",
    app: "AS400",
    cat: "How t0",
  },
];

const data = [
  { label: "How to", year: 1994 },
  { label: "VPN", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

export default function Search() {
  const [pageSize, setPageSize] = React.useState(5);
  const [colorFocus, setColorFocus] = React.useState(false);
  console.log(colorFocus);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeActions.loadHome());
  }, [dispatch]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={12}>
          <Card sx={{ minWidth: "275px" }}>
            <CardContent>
              {/* <Grid container spacing={2}>
                <Grid item xs={6} md={10} sx={{ flexFlow: 1 }}></Grid>
                <Grid item xs={6} md={2} sx={{ mt: 1 }}>
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<AddIcon sx={{ color: "#fff" }} />}
                    color="btadd"
                    sx={
                      {
                        // p:0.1
                      }
                    }
                  >
                    <Typography component="div" color="#fff">
                      Add new
                    </Typography>
                  </Button>
                </Grid>
              </Grid> */}
              <Grid container spacing={3} sx={{ mt: 0 }}>
                <Grid item xs={0} md={2}></Grid>
                <Grid item xs={12} md={8}>
                  <Paper
                    onSubmit={() => alert("action")}
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
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Knowladge Search"
                      inputProps={{ "aria-label": "search google maps" }}
                      size="small"
                      onFocus={() => setColorFocus(true)}
                      onMouseLeave={() => setColorFocus(false)}
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
                <Grid item xs={0} md={2}></Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={0} md={2} sx={{ mr: 2 }}></Grid>
                <Grid item xs={12} md={3}>
                  <Autocomplete
                    id="combo-box-demo"
                    size="small"
                    options={data}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        margin="dense"
                        label="Category"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    size="small"
                    options={data}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        margin="dense"
                        label="Applcation"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={0} md={2}>
                  <Button
                    size="small"
                    variant="contained"
                    // startIcon={<AddIcon sx={{ color: "#fff" }} />}
                    color="primary"
                    sx={{
                      mt: 1.5,
                      pl: 4,
                      pr: 4,
                    }}
                  >
                    <Typography component="div" color="#fff">
                      Clear
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={0} md={2}></Grid>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={12}></Grid>
                <Grid item xs={12} md={12}>
                  {/* <Card sx={{ minWidth: "275px" }}> */}
                  {/* <CardHeader
                      sx={{ backgroundColor: "#fff" }}
                      // avatar={
                      //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      //     R
                      //   </Avatar>
                      // }
                      // action={
                      //   <IconButton aria-label="settings">
                      //     <MoreVertIcon />
                      //   </IconButton>
                      // }
                      color="red"
                      title="รายการ KM"
                    /> */}
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: "100%",
                      bgcolor: "background.paper",
                    }}
                  >
                    {datakm.map((res) => {
                      return (
                        <React.Fragment>
                          <ListItem sx={{ p: 0.1, ml: 5 }}>
                            <ListItemText
                              primary={
                                <React.Fragment>
                                  <Grid container spacing={2}>
                                    <Stack
                                      direction="row"
                                      spacing={1}
                                      sx={{ mt: 2 }}
                                    >
                                      <SpeakerNotesIcon sx={{ mt: 0, mr: 1 }} />
                                      {"แก้ไขปัญหา AS 400 error เดี่ยงบ่อย"}
                                    </Stack>
                                  </Grid>
                                </React.Fragment>
                              }
                              secondary={
                                <React.Fragment>
                                  <Grid container spacing={2}>
                                    <Grid item xs={6} md={2}>
                                      <Grid
                                        container
                                        spacing={2}
                                        direction="row"
                                        sx={{ mt: 0.2 }}
                                      >
                                        <Grid
                                          xs={2}
                                          md={2}
                                          sx={{ mt: 0.5, ml: 1 }}
                                        >
                                          <PersonIcon fontSize="small" />
                                        </Grid>
                                        <Grid xs={9} md={8} sx={{ mt: 1 }}>
                                          {"Thanawat Klinson"}
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                    <Grid item xs={6} md={2}>
                                      <Grid
                                        container
                                        spacing={2}
                                        direction="row"
                                        sx={{ mt: 0.2 }}
                                      >
                                        <Grid
                                          xs={2}
                                          md={2}
                                          sx={{ mt: 0.5, ml: 1 }}
                                        >
                                          <AccessTimeIcon  fontSize="small" />
                                        </Grid>
                                        <Grid xs={9} md={8} sx={{ mt: 1 }}>
                                          {"15/07/2022"}
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                    <Stack
                                      direction="row"
                                      spacing={1}
                                      sx={{ mt: 2 }}
                                    >
                                      <Chip
                                        label="How to"
                                        color="btcat"
                                        sx={{ mr: 2 }}
                                      />
                                      {
                                        res.app !== null ? 
                                        <Chip label="AS400" color="btapp" />
                                        : null
                                      }
                                     
                                    </Stack>
                                  </Grid>
                                </React.Fragment>
                              }
                              onClick={() => alert("")}
                            />
                          </ListItem>
                          <Divider sx={{ my: 0, mx: 4 }} color="#85929E" />
                        </React.Fragment>
                      );
                    })}
                  </List>
                  {/* </Card> */}
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
