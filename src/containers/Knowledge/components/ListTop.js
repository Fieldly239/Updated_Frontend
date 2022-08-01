import React from 'react';
import { useEffect } from "react";
import { useDispatch,  useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as knowledgeActions from "../../../redux/actions/knowledge.action";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const ListTop = () => {

  
    let navigate = useNavigate();
    const knowledges = useSelector((state) => state.knowledges);
    const knowledgeList = knowledges.result;
    const dispatch = useDispatch();
  
  
  
    useEffect(() => {
    dispatch(knowledgeActions.loadTopListKnowledges());
  }, []);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
      }));

  return (

    <Grid container spacing={2}>
    <Grid item xs={12} md={12}>
    <Box>
        <List
        sx={{
            width: "100%",
            maxWidth: "100%",
            bgcolor: "background.paper",
        }}
        >
        {knowledgeList  && knowledgeList.data.map((knowledge) => {
            return (
            <React.Fragment key={knowledge.title}>
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
                            <SpeakerNotesIcon
                            sx={{ mt: 0, mr: 1 }}
                            />
                            {knowledge.title}
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
                                {knowledge.createdBy} 
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
                                <AccessTimeIcon fontSize="small" />
                            </Grid>
                            <Grid xs={9} md={8} sx={{ mt: 1 }}>
                                {knowledge.modifiedDate}
                            </Grid>
                            </Grid>
                        </Grid>
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ mt: 2 }}
                        >
                            {knowledge.categoryName !== null ? (
                            <Chip
                            label={knowledge.categoryName}
                            color="btcat"
                            sx={{ mr: 2 }}
                            />
                            ) : null}{" "}
                            {knowledge.applicationName !== null ? (
                            <Chip label={knowledge.applicationName}color="btapp" />
                            ) : null}{" "}
                        </Stack>
                        </Grid>
                    </React.Fragment>
                    }
                    onClick={() => alert("")}
                />
                </ListItem>
                <Divider sx={{ my: 0, mx: 4 }} color="#D3D5D7" />
            </React.Fragment>
            );
        })}
        </List>
    </Box>
    </Grid>
    </Grid>
    
  )
}

export default ListTop
