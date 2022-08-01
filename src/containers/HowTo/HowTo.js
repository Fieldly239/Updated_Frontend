import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Search from './components/Search';
import Listitem from './components/Listitem';
import Category from './components/Category';

export default function HowTo() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={12}>
          <Card sx={{ minWidth: "275px" }}>
            <CardContent>
              <Search />
              <Category />
              <Listitem />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
