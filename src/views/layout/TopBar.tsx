import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box
} from "@mui/material";
import {
  Dehaze,
  AccountCircle,
  Inbox,
  Settings,
  ExitToApp,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "./../../store/aside";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import PopupState, { bindHover, bindPopover } from "material-ui-popup-state";
import { useTheme } from "@mui/material";

const TopBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { drawerStatus } = useSelector((state: any) => state.aside);
  const theme = useTheme()
  const onToggleAside = () => {
    dispatch(setDrawer({ drawerStatus: !drawerStatus }));
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      color="secondary"
      sx={{
        flexShrink: 0,
        width: drawerStatus ? "calc(100% - 260px)" : "100%",
        position: "fixed",
        top: "0px",
        left: "auto",
        right: "0px",
        zIndex: 1000,
        transition: "width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
        borderBottom: `${theme.palette.divider} 1px solid`
      }}
    >
      <Toolbar
        sx={{ flexWrap: "wrap", justifyContent: "space-between" }}
      >
        <IconButton onClick={onToggleAside}>
          <Dehaze />
        </IconButton>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <>
              <Box {...bindHover(popupState)} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="body1">admin</Typography>
                <IconButton>
                  <AccountCircle />
                </IconButton>
              </Box>
              <HoverPopover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <nav aria-label="main mailbox folders">
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ marginRight: 1, minWidth: 0 }}>
                          <Inbox />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem
                      disablePadding
                      onClick={() => {
                        navigate("/configuration");
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon sx={{ marginRight: 1, minWidth: 0 }}>
                          <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Configuration" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem
                      disablePadding
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon sx={{ marginRight: 1, minWidth: 0 }}>
                          <ExitToApp />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </HoverPopover>
            </>
          )}
        </PopupState>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
