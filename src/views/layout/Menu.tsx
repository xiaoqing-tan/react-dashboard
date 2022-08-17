import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { Box, Collapse, MenuList } from "@mui/material";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import { useSelector } from "react-redux";
import { RouteProps, RouterContext } from "../../core";

import MenuItemLink from './MenuItemLink';

const Nav = styled(MenuList)<{ component?: React.ElementType }>({
  width: '100%',
  padding: 8
});

const flat = (menu: RouteProps[], path?: string): RouteProps[] => {
  return menu.map((i) => {
    if (i.index) {
      i.path = path || "/";
    } else {
      i.path = path ? `${path}/${i.path}` : `/${i.path}`;
    }
    if (i.children) {
      i.children = flat(i.children, i.path);
    }
    return i;
  });
};

export default function Menu({ isSidebarActive }: { isSidebarActive: boolean }) {
  const { t } = useTranslation();
  const routes = useContext<RouteProps[]>(RouterContext);
  const menu = flat(_.cloneDeep(routes[0].children!));
  const { openedMenuList } = useSelector((state: any) => state.aside);

  const renderMenu = (item: RouteProps, level: number) => {
    const { path: to = '/', name = '', icon, children = [] } = item;
    const isCollapseActive = openedMenuList.indexOf(to) > -1;
    const isParent = !!children.length;

    return (
        <Box key={`${to}_${name}`}>
          <MenuItemLink 
            isSidebarActive={isSidebarActive}
            isCollapseActive={isCollapseActive}
            isParent={isParent}
            to={to}
            icon={icon}
            name={t(name)}
            level={level}
          />
          { 
            isParent && (
              <Collapse in={isCollapseActive} timeout={{ appear: 200, enter: 200, exit: 500 }}>
                { children.map((item: RouteProps) => renderMenu(item, 1)) }
              </Collapse>
            )
          }
        </Box>
      )
  }
  
  return (
    <Nav component="nav" disablePadding>
      { menu.map((item: RouteProps) => renderMenu(item, 0) )}
    </Nav>
  );
}
