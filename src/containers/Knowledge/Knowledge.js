import * as React from "react";
import { useEffect } from "react";
import { useDispatch,  useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as homeActions from "../../redux/actions/home.action";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import * as categoryActions from "../../redux/actions/category.action";
import Search from "./components/Search";
import Category from "./components/Category";
import ListTop from "./components/ListTop";


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
    app:  "AS400",
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
    app: null,
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

export default function Knowladge() {
  const [pageSize, setPageSize] = React.useState(5);
  const [colorFocus, setColorFocus] = React.useState(false);
  let navigate = useNavigate();
  const knowledges = useSelector((state) => state.knowledges);
  const categories = useSelector((state) => state.categories);
  const knowledsgeList = knowledges.result;
  const categoriesList = categories.result;
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(homeActions.loadHome());
  }, [dispatch]);

  useEffect(() => {
    dispatch(categoryActions.loadCategories());
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
      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={12}>
          <Card sx={{ minWidth: "275px" }}>
            <CardContent>
              <Grid container spacing={3} sx={{ mt: 0 }}>
                <Grid item xs={0} md={2}></Grid>
                <Grid item xs={12} md={8}>

                  <Search />
                  
                </Grid>
            
              </Grid>

              <Category />
              
              <Grid container spacing={2}>
                <Grid item xs={6} md={10}></Grid>
                <Grid item xs={6} md={2} sx={{ mt: 1 }}>
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

              <ListTop/>
              
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
