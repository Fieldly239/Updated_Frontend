import React from "react";
//import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";

function Copyright(props) {
  return (
    <footer className="app-footer">
      <span className="d-inline-block">
        Copyright{" "}
        <Link href="/" size="small" color="primary">
          NTL IT Infra Dev
        </Link>{" "}
        &copy; 2022
      </span>
      {/* <Button
        size="small"
        color="primary"
      >V 1.2.1</Button> */}
    </footer>
  );
}

export default function index() {
  return <Copyright />;
}
