import { useContext } from "react";
import { ThemeOptions, PaletteMode } from '@mui/material';
import { ThemeContext, getTheme } from "./../theme";
import theme from './configs';

export const useTheme = () => {
  const { setTheme } = useContext(ThemeContext);
  const themeName = getTheme();
  const setItem = (props: {name: PaletteMode, theme: ThemeOptions}) => {
    window.localStorage.setItem('theme', props.name);
    setTheme(getTheme())
  }
  return [themeName, setItem] as [PaletteMode, (props: {name: PaletteMode, theme: ThemeOptions}) => void]
}