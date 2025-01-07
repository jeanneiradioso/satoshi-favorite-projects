import React, { useState } from "react";
import { Collapse, List } from "@mui/material";
import { routes } from "../../routes/routes";
import {
  SidebarWrapper,
} from "./sidebar.styles";
import Favorites from "../../pages/favorites/favorites";

const Sidebar: React.FC = () => {
 
  return (
    <SidebarWrapper>
      <List>
        <Favorites/>
      </List>
    </SidebarWrapper>
  );
};

export default Sidebar;
