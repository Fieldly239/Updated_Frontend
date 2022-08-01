import React from 'react';
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";



const Search = () => {

  const [colorFocus, setColorFocus] = React.useState(false);
  let navigate = useNavigate();



  return (
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
  )
}

export default Search
