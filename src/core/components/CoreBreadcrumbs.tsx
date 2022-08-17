import { useContext, useMemo } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { RouteProps, RouterContext } from '../../core';

type getNameProps = {
  path: string,
  routes: RouteProps[]
}

export const CoreBreadcrumbs = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const pathnames = ['/'].concat(pathname.split('/').filter((x) => x));
  let routes = useContext<RouteProps[]>(RouterContext);

  const getName = ({path, routes}: getNameProps) => {
    const [{ name, icon, children }] = routes.filter(item => path === item.path);
    return {
      name,
      children,
      icon
    };
  }

  const breadcrumbs = pathnames.map(path => {
    const { name, icon, children } = getName({ path, routes });
    routes = children as RouteProps[];
    return {
      path,
      name,
      icon
    }
  });

  const title = useMemo(() => breadcrumbs[breadcrumbs.length - 1].name!, [breadcrumbs])

  return (
    <Box sx={{mb: 1}}>
      <Breadcrumbs sx={{mb: 1}} separator="›" aria-label="breadcrumb">
          { 
            breadcrumbs.map((item, index) => {
              const last = index === pathnames.length - 1;
              const to = `${pathname.split('/').slice(0, index + 1).join('/')}`;
              return !last ? (
                <Link sx={{ display: 'flex', alignItems: 'center',  fontSize: 14 }} key={ item.name } underline="hover" component={RouterLink} to={to || '/'}>
                  { item.icon }
                  { t(item.name!) }
                </Link>): (
                <Typography sx={{ display: 'flex',  alignItems: 'center', fontSize: 14 }} key={ item.name } color="text.primary">
                  { item.icon }
                  { t(item.name!) }
                </Typography>
                )
            })
          }
        </Breadcrumbs>
        <Typography variant='body1' sx={{fontSize: '24px', px: 2, fontWeight: 'bold'}}>{t(title)}</Typography>
    </Box>

  )
}