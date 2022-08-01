import React from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Tooltip from '@mui/material/Tooltip';




const Search = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 0 }}>
    <Grid item xs={0} md={2}></Grid>
    <Grid item xs={12} md={8}>
      <Paper onSubmit={() => alert("action")} component="form"
        sx={{ display: "flex", alignItems: "center", borderRadius: 10, border: 1.7, 
          borderColor: "#C7C5C4", boxShadow: 0, mb: 0}} margin="dense" >
            <Tooltip title="Search">
            <IconButton size="small" aria-label="search" >
              <SearchIcon />
            </IconButton>
            </Tooltip>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Knowladge Search" inputProps={{ "aria-label": "search google maps" }} size="small" />
      </Paper>
    </Grid>
    <Grid item xs={0} md={2}></Grid>
  </Grid>
  )
}

export default Search

