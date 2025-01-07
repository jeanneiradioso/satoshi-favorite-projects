import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Breadcrumb } from "..";

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" className="!mr-10">
          Project Management
        </Typography>
        <Breadcrumb />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
