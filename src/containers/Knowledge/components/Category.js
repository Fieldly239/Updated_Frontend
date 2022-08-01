import React from 'react';
import { useEffect } from "react";
import { useDispatch,  useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as categoryActions from "../../../redux/actions/category.action";
import TableContainer from "@mui/material/TableContainer";
import FolderIcon from "@mui/icons-material/Folder";
import Table from "@mui/material/Table";


const Category = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const categories = useSelector((state) => state.categories);
    const categoriesList = categories.result;
  

  
    useEffect(() => {
      dispatch(categoryActions.loadCategories());
    }, []);

  return (
    <Grid item xs={12} md={12}>
                <Box mt={3} mb={3}>
                 
                  <Card sx={{ boxShadow: 3 }}>
                    <CardHeader
                      sx={{
                        bgcolor: "#fff",
                        textAlign: "left",
                        color: "black",
                        p: 0.5,
                        pl: 1,
                        fontSize: "small",
                        variant: "h2",
                      }}
                      action={
                        <IconButton
                          sx={{ color: "black" }}
                          aria-label="settings"
                        >
                        
                        </IconButton>
                      }
                      title={
                        <React.Fragment>
                          <Typography component="div" color="#000">
                            Catagory
                          </Typography>
                        </React.Fragment>
                      }
                     
                    />
                    <Divider sx={{ my: 0, mx: 2 }} color="#89CDFF" />
                    <CardContent>
                      <Grid sx={{ height: "190px", mt: 1 , mb: -1}}>
                        <TableContainer sx={{ maxHeight: 180 }}>
                          <Table stickyHeader aria-label="sticky table">
                            <Grid
                              container
                              spacing={{ xs: 2, md: 3 }}
                              columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                              {categoriesList  &&
                                categoriesList.data.map((category) => (
                                  <Grid item xs={2} sm={6} md={2} key={category.name}>
                                    <Link
                                      to="/"
                                      style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                      }}
                                    >
                                      <FolderIcon sx={{ color: "#f9a825" }} fontSize="large" />
                                      <Typography variant="subtitle2" >{category.name}</Typography>
                                    </Link>
                                  </Grid>
                                ))}
                            </Grid>
                          </Table>
                        </TableContainer>
                      </Grid>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>

  )
}

export default Category
