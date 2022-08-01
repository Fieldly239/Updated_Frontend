import React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const AddButton = () => {

  let navigate = useNavigate();
  return (
    
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ mt: 2 }}>
        <Button
          size="medium"
          variant="contained"
          sx={{ mr: 2, pl: 4, pr: 4, background: "#0b8457" }}
          // disabled={isSubmitting}
          type="submit"
          // onClick={() => { resetForm() }}
          >
            <Typography color="#fff">บันทึก</Typography>
        </Button>
        <Button
          size="medium"
          variant="contained"
          color="btRed"
          sx={{ mr: 2, pl: 4, pr: 4 }}
          onClick={() => navigate('/knowledge', { replace: true })}
          >
            <Typography color="#fff">ยกเลิก</Typography>
        </Button>
      </Stack>
    </Box>
  )
}

export default AddButton
