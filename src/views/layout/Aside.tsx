import { useSelector } from 'react-redux'
import { Box, Drawer, useMediaQuery,  } from "@mui/material";
import { useTheme, styled, ThemeOptions } from '@mui/material/styles';
import Menu from './Menu';
import Logo from './Logo';

type AsideProps = {
  window?: () => Window
}

const StyledDrawer = styled(Drawer,{ 
  shouldForwardProp: (prop) => prop !== 'open' 
})(({ theme, open }) => {
  return {
    width: open ? '260px' : 0,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '& .MuiDrawer-paper': {
      width: open ? '260px' : 0,
      boxSizing: 'border-box',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
    }
  }
})  

const Aside = ({ window }: AsideProps) => {
  const { drawerStatus } = useSelector((state: any) => state.aside)
  const theme = useTheme();
  return (
      (
        <Box component="nav" sx={{ flexShrink: 0, zIndex: 1, }}>
          <StyledDrawer open={drawerStatus} variant="permanent">
            <Logo isSidebarActive={drawerStatus} />
            <Menu isSidebarActive={drawerStatus} />
          </StyledDrawer>
        </Box>
      )
  )
}

export default Aside;