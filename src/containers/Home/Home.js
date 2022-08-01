import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as homeActions from "../../redux/actions/home.action";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { DataGrid } from "@mui/x-data-grid";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CardContentNoPadding = styled(CardContent)(`
padding: 0;
&:last-child {
  padding: 10px 10px 1px 10px;
}
`);

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Home() {
  const [pageSize, setPageSize] = React.useState(5);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={12}>
          <Typography variant="h5" component="div" sx={{ mb: 1 }}>
            SeviceDesk Knowledge Manament
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={0} md={3}></Grid>
          <Grid item xs={12} md={6}>
            <Paper
              component="form"
              onClick={() => {
                navigate("/search", { replace: true });
              }}
              sx={{
                // p: "2px 4px",
                display: "flex",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <IconButton
                type="submit"
                // sx={{ p: "10px" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
                <MenuIcon />
              </IconButton> */}
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Knowladge Search"
                inputProps={{ "aria-label": "search google maps" }}
                size="small"
              />
              {/* <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              >
                <DirectionsIcon />
              </IconButton> */}
            </Paper>
          </Grid>
          <Grid item xs={0} md={3}></Grid>
        </Grid>

        <Grid item xs={12} md={12}>
          <Box mt={3}>
            {/* <Item elevation={2}> */}
            <Card sx={{ boxShadow: 3 }}>
              <CardActions
                sx={{
                  bgcolor: "#89CDFF",
                  textAlign: "left",
                  color: "white",
                  p: 0,
                  pl: 2,
                }}>
                <Typography variant="h6" component="h6">
                  FAQ
                </Typography>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>

              {/* <CardHeader
                sx={{
                  bgcolor: "#89CDFF",
                  textAlign: "left",
                  color: "black",
                  p: 0.5,
                  pl: 1,
                }}
                action={
                  <IconButton sx={{ color: "black" }} aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="FAQ"
              //subheader="September 14, 2016"
              /> */}
              {/* <Divider sx={{ my: 0, mx: 2 }} color="#89CDFF" /> */}
              <CardContent>
                {/* <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ textAlign: "right", boxShadow: 3 }}>
                      <CardContentNoPadding>
                        <Typography variant="body2" color="text.secondary">
                          รายการทั้งหมดของฉัน
                        </Typography>
                        <Typography variant="h4" component="div">
                          0
                        </Typography>
                      </CardContentNoPadding>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ textAlign: "right", boxShadow: 3 }}>
                      <CardContentNoPadding>
                        <Typography variant="body2" color="text.secondary">
                          รอดำเนินการ
                        </Typography>
                        <Typography variant="h4" component="div">
                          0
                        </Typography>
                      </CardContentNoPadding>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ textAlign: "right", boxShadow: 3 }}>
                      <CardContentNoPadding>
                        <Typography variant="body2" color="text.secondary">
                          รออนุมัติ
                        </Typography>
                        <Typography variant="h4" component="div">
                          0
                        </Typography>
                      </CardContentNoPadding>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ textAlign: "right", boxShadow: 3 }}>
                      <CardContentNoPadding>
                        <Typography variant="body2" color="text.secondary">
                          รอการประเมิน
                        </Typography>
                        <Typography variant="h4" component="div">
                          0
                        </Typography>
                      </CardContentNoPadding>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ textAlign: "right", boxShadow: 3 }}>
                      <CardContentNoPadding>
                        <Typography variant="body2" color="text.secondary">
                          งานของทีม
                        </Typography>
                        <Typography variant="h4" component="div">
                          0
                        </Typography>
                      </CardContentNoPadding>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ textAlign: "right", boxShadow: 3 }}>
                      <CardContentNoPadding>
                        <Typography variant="body2" color="text.secondary">
                          งานของฉัน
                        </Typography>
                        <Typography variant="h4" component="div">
                          0
                        </Typography>
                      </CardContentNoPadding>
                    </Card>
                  </Grid>
                </Grid> */}
              </CardContent>
            </Card>
            {/* </Item> */}
          </Box>

          <Box mt={3}>
            {/* <Item elevation={2}> */}
            <Card sx={{ boxShadow: 3 }}>
              <CardHeader
                sx={{
                  bgcolor: "#FFB76F",
                  textAlign: "left",
                  color: "black",
                  p: 0.1,
                  pl: 1,
                }}
                action={
                  <IconButton sx={{ color: "black" }} aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Favorite"
              //subheader="September 14, 2016"
              />
              {/* <Divider sx={{ my: 0, mx: 2 }} color="#FEA246" /> */}
              <CardContent>
                {/* <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ textAlign: "right", boxShadow: 3 }}>
                      <CardContentNoPadding>
                        <Typography variant="body2" color="text.secondary">
                          รายการทั้งหมดของฉัน
                        </Typography>
                        <Typography variant="h4" component="div">
                          0
                        </Typography>
                      </CardContentNoPadding>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ textAlign: "right", boxShadow: 3 }}>
                      <CardContentNoPadding>
                        <Typography variant="body2" color="text.secondary">
                          รอดำเนินการ
                        </Typography>
                        <Typography variant="h4" component="div">
                          0
                        </Typography>
                      </CardContentNoPadding>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ textAlign: "right", boxShadow: 3 }}>
                      <CardContentNoPadding>
                        <Typography variant="body2" color="text.secondary">
                          รออนุมัติ
                        </Typography>
                        <Typography variant="h4" component="div">
                          0
                        </Typography>
                      </CardContentNoPadding>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ textAlign: "right", boxShadow: 3 }}>
                      <CardContentNoPadding>
                        <Typography variant="body2" color="text.secondary">
                          รอการประเมิน
                        </Typography>
                        <Typography variant="h4" component="div">
                          0
                        </Typography>
                      </CardContentNoPadding>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ textAlign: "right", boxShadow: 3 }}>
                      <CardContentNoPadding>
                        <Typography variant="body2" color="text.secondary">
                          งานของทีม
                        </Typography>
                        <Typography variant="h4" component="div">
                          0
                        </Typography>
                      </CardContentNoPadding>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ textAlign: "right", boxShadow: 3 }}>
                      <CardContentNoPadding>
                        <Typography variant="body2" color="text.secondary">
                          งานของฉัน
                        </Typography>
                        <Typography variant="h4" component="div">
                          0
                        </Typography>
                      </CardContentNoPadding>
                    </Card>
                  </Grid>
                </Grid> */}
              </CardContent>
            </Card>
            {/* </Item> */}
          </Box>
        </Grid>
      </Grid>
    </Box >
  );
}
