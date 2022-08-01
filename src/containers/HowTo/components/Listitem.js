import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import AddIcon from "@mui/icons-material/Add";
import Chip from "@mui/material/Chip";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Link, useNavigate } from "react-router-dom";
import ForumIcon from "@mui/icons-material/Forum";
import * as knowledgeActions from "../../../redux/actions/knowledge.action";
import { useDispatch, useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";

const Listitem = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const knowledges = useSelector((state) => state.knowledges);
  const knowledgeList = knowledges.result;

  useEffect(() => {
    dispatch(knowledgeActions.loadTopListKnowledges());
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <CardHeader
        sx={{ backgroundColor: "#fff" }}
        action={
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
        }
      />
      <Grid sx={{ minWidth: 200, marginLeft: "20px", marginRight: "20px" }}>
        {knowledgeList && knowledgeList.data ? (
          <TableContainer>
            <Table
              sx={{ minWidth: 700, mt: 1 }}
              size="small"
              aria-label="spanning table"
              display="flex"
              alignItems="center"
            >
              <TableHead>
                {knowledgeList && knowledgeList.data ? (
                  knowledgeList.data.map((knowledge) => (
                    <TableRow key={knowledge.title}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ marginTop: "5px", marginBottom: "5px" }}
                      >
                        <Typography
                          noWrap
                          variant="subtitle1"
                          gutterBottom
                          component="div"
                          sx={{ maxWidth: "100%", overflowWrap: "break-word" }}
                        >
                       
                          
                          <ForumIcon
                            fontSize="small"
                            textAlign="center"
                            sx={{ mr: 0, mb: -0.5, color: "#424242" }}
                          />{" "}
                            {knowledge.title} 
                          <Typography
                            gutterBottom
                            component="div"
                            color="#757575"
                          >
                            
                            <Box sx={{ flexGrow: 1 }}>
                              <Grid container spacing={2} columns={16}>
                                <Grid item xs={3}>
                                  <Tooltip title={knowledge.createdBy}>
                                  <Typography variant="subtitle2" noWrap>
                                    <AccountCircleIcon
                                      fontSize="small"
                                      textAlign="center"
                                      sx={{ mb: -0.5 }}
                                    />{" "}
                                    {knowledge.createdBy}
                                  </Typography></Tooltip>
                                </Grid>
                                <Grid item xs={5}>
                                <Tooltip title={knowledge.modifiedDate}>
                                  <Typography variant="subtitle2" noWrap>
                                    <AccessTimeIcon
                                      fontSize="small"
                                      textAlign="center"
                                      sx={{ mb: -0.5, ml: 5 }}
                                    />{" "}
                                    {knowledge.modifiedDate}
                                  </Typography></Tooltip>
                                </Grid>
                                <Grid item xs={6}>
                                  <Grid
                                    container
                                    spacing={3}
                                    direction="row"
                                    sx={{ mt: -0.5, ml: 3 }}
                                  >
                                    {knowledge.categoryName !== null ? (
                                      <Tooltip title={knowledge.categoryName}>
                                      <Chip
                                        label={knowledge.categoryName}
                                        sx={{
                                          mr: 2,
                                          color: "#fff",
                                          background: "#f9a825",
                                          p: 0.5,
                                          alignContent: "flex-end",
                                        }}
                                      /></Tooltip>
                                    ) : null}
                                    {knowledge.applicationName !== null ? (
                                      <Tooltip title={knowledge.applicationName}>
                                      <Chip
                                        label={knowledge.applicationName}
                                        sx={{
                                          color: "#fff",
                                          background: "#f4511e",
                                          p: 0.5,
                                        }}
                                      /></Tooltip>
                                    ) : null}
                                    <Tooltip title="FileAttachment">
                                      <Typography variant="subtitle2" noWrap>
                                        <AttachFileIcon
                                          fontSize="medium"
                                          sx={{ mb: -0.5, ml: 2 }}
                                        />
                                      </Typography>
                                    </Tooltip>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Box>
                          </Typography>
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow key={"knowledge.title"}>
                    <TableCell
                      component="th"
                      scope="row"
                      textAlign="center"
                      sx={{ marginTop: "5px", marginBottom: "5px" }}
                    >
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                          <Grid item xs={12} md={12}>
                            <Typography variant="subtitle2" noWrap>
                              {"knowledge.createdBy"}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </TableCell>
                  </TableRow>
                )}
              </TableHead>
            </Table>
          </TableContainer>
        ) : (
          <Box sx={{ flexGrow: 1, mb: 5, mt: 5 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <Typography variant="subtitle" noWrap sx={{ fontSize: 20 }}>
                  {" - ไม่มีข้อมูล - "}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default Listitem;
