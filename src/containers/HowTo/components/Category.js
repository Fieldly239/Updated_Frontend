import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import FolderIcon from "@mui/icons-material/Folder";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useDispatch, useSelector } from "react-redux";
import * as categoryActions from "../../../redux/actions/category.action";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Chip from "@mui/material/Chip";
import Tooltip from '@mui/material/Tooltip';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

const Category = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const knowledges = useSelector((state) => state.knowledges);
  const categories = useSelector((state) => state.categories);
  const knowledsgeList = knowledges.result;
  const categoriesList = categories.result;

  useEffect(() => {
    dispatch(categoryActions.loadCategories());
  }, []);

  return (
    <Box sx={{ mt: 2, marginLeft: "10px", marginRight: "10px" }}>
      <Typography>
        <Box
          sx={{
            mb: -2,
            ml: 2,
            justifyContent: "flex-start",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
           <Chip
            label="CATEGORY"
            sx={{
            mr: 2,
            color: "#fff",
            background: "#0E769C",
            p: 0.5,
             alignContent: "flex-start",
            }}
           />
        </Box>

        <Card
          sx={{
            height: "220px",
            boxShadow: 4,
            mb: 2,
            backgroundColor: "#fff",
            borderRadius: 2,
            borderColor: "#616161",
          }}
        >
          <CardContent>
            <Grid sx={{ height: "190px", m: 1.5 }}>
              <TableContainer sx={{ maxHeight: 180 }}>
                <Table stickyHeader aria-label="sticky table">
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {categoriesList &&
                      categoriesList.data.map((category) => (
                        <Grid item xs={2} sm={6} md={2} key={category.name}>
                          <Link
                            to="/"
                            style={{
                              textDecoration: "none",
                              color: "inherit",
                            }}
                          >
                            
                              <MenuBookIcon
                              sx={{ color: "#f9a825" }}
                              fontSize="large"
                            />
                            <Tooltip title={category.name}>
                            <Typography variant="subtitle2">
                              {category.name}
                            </Typography>
                            </Tooltip>
                          </Link>
                        </Grid>
                      ))}
                  </Grid>
                </Table>
              </TableContainer>
            </Grid>
          </CardContent>
        </Card>
      </Typography>
    </Box>
  );
};

export default Category;
