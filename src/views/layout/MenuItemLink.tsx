import React, { forwardRef, memo, useEffect } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";
import {
  MenuItem,
  MenuItemProps,
  ListItemIcon,
  ListItemText,
  Theme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { KeyboardArrowDownOutlined, Circle } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "./../../store/aside";

type Props = {
  level?: number;
  component?: React.ElementType;
  isParent?: boolean
} & Pick<LinkProps, "to">;

const childStyle = (theme: Theme, level?: number) => {
  return {
    "&.MuiMenuItem-root": {
      padding: `12px ${level ? '44px' : '18px'}`,
      margin: '0 0 4px 0',
      // borderRadius: 8,
    }
  }
};

const parentStyle = (theme: Theme) => ({
  "&.MuiMenuItem-root": {
    padding: "12px 18px",
    margin: '0 0 4px 0',
    // borderRadius: 8,
    backgroundColor: "transparent",
    transition: theme.transitions.create('background-color', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.standard
    }),
    "&.Mui-selected, &:hover": {
      transition: theme.transitions.create('backgroundColor', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.standard
      }),
      backgroundColor: "transparent",
    }
  }
});

const StyledMenuItem = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== "level" && prop !== "isParent",
})<Props>(({ level, theme, isParent }) => {
  return {
    "& .MuiTypography-root, & .MuiListItemIcon-root": {
      color: theme.palette.text.primary,
      transition: theme.transitions.create('color', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.standard
      }),
    },
    "& .MuiListItemIcon-root": {
      minWidth: 0,
      marginRight: 8,
    },
    "& .MuiTypography-root": {
      fontSize: "0.875rem",
    },
    "&.Mui-selected, &:hover": {
      "& .MuiListItemIcon-root, & .MuiTypography-root": {
        color: theme.palette.text.secondary
      }
    },
    ...(!level && isParent ? parentStyle(theme) : childStyle(theme, level)),
  };
});

const MenuItemLink = forwardRef<HTMLLIElement, MenuItemLinkProps>(
  (props, ref) => {
    const {
      name,
      to,
      icon,
      isParent,
      level,
      isCollapseActive
    } = props;
    const dispatch = useDispatch();
    const { openedMenuList } = useSelector((state: any) => state.aside);
    const { pathname } = useLocation();
    const isActive = to !== '/' && pathname.indexOf(to as string) > -1;

    useEffect(() => {
      if (isActive && isParent) {
        dispatch(setMenu({ openedMenuList: [to]}))
      }
    }, [])

    const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
      if (isParent) {
        e.preventDefault();
        if (openedMenuList.indexOf(to) < 0) {
          dispatch(setMenu({ openedMenuList: [...openedMenuList, to]}))
        } else {
          dispatch(setMenu({ openedMenuList: openedMenuList.filter((i:string) => i !== to )}))
        }
      }
    }

    return (
      <StyledMenuItem
        ref={ref}
        to={to}
        component={Link}
        selected={pathname === to || (!level && isCollapseActive)}
        level={level}
        isParent={isParent}
        onClick={onClick}
      >
        <ListItemIcon>
          { !level ? icon : <Circle sx={{ fontSize: 6 }} /> }
        </ListItemIcon>
        <ListItemText>{name}</ListItemText>
        {
          isParent && (
            <KeyboardArrowDownOutlined
              sx={{
                mr: -1,
                opacity: isCollapseActive ? .7 : 0.5,
                transform: isCollapseActive ? "rotate(-180deg)" : "rotate(0)",
                transition: ".2s",
                fontSize: 18
              }}
            />
          )
        }
      </StyledMenuItem>
    );
  }
);

export type MenuItemLinkProps = LinkProps &
  MenuItemProps<"li"> & {
    name: string;
    isSidebarActive: boolean;
    isCollapseActive?: boolean,
    isParent: boolean;
    icon: React.ReactNode;
    level?: number;
    selected?: boolean;
  };

export default memo(MenuItemLink);
