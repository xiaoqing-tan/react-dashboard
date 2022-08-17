import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";

import Aside from "./Aside";
import Content from "./Content";
import Topbar from './TopBar';

const Layout = () => {
  return (
    <Container
      sx={{ display: "flex", width: '100%' }}
      maxWidth={ false }
      disableGutters
      component="main"
    >
      <Topbar />
      <Aside />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
