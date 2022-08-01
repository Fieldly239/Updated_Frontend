import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SaveIcon from "@mui/icons-material/Save";
export default function ButtonComponent(props) {
  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Grid item xs={12} md={12}>
        <Button
          sx={{ pl: 2, pr: 2 }}
          size="small"
          variant="contained"
          startIcon={<SaveIcon sx={{ color: "#fff" }} />}
          color="btadd"
          onClick={() => {
            props.handleConfirmCreate();
          }}
        >
          <Typography component="div" variant="subtitle1" color="#fff">
            บันทึก
          </Typography>
        </Button>
      </Grid>
    </Box>
  );
}
