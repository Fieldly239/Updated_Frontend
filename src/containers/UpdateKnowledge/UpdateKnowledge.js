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
import Typography from "@mui/material/Typography";
import UpdateInfo from "./components/UpdateInfo";


const UpdateKnowledge = () => {

  const [pageSize, setPageSize] = React.useState(5);
  const [colorFocus, setColorFocus] = React.useState(false);
  let navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeActions.loadHome());
  }, [dispatch]);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} textAlign="start" justifyContent="center" mb={1}>
        <Grid item xs={12} md={12}>
          <Card sx={{ minWidth: "275px", height: "50px", backgroundColor: "#0E769C" }}>
            <CardContent>
              <Grid  item xs={12} md={12} sx={{mt:-1}}>
                <Typography variant="h6" color="#fff" ><b>EDIT KNOWLEDGE</b></Typography>
                </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>


      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" >
        <Grid item xs={12} md={12} >
          <Card sx={{ minWidth: "275px" }}>
            <CardContent>
              <UpdateInfo />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UpdateKnowledge
