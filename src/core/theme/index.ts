import React from "react";
import { PaletteMode } from '@mui/material';

export interface ThemeProps {
  theme: PaletteMode,
  setTheme: (theme: PaletteMode) => void
}

export const getTheme = (): PaletteMode => {
  return (window.localStorage.getItem('theme') || 'dark') as PaletteMode;
}

export const themeConfig = {
  theme: getTheme(),
  setTheme: (theme: PaletteMode): void => {}
}

export const ThemeContext = React.createContext<ThemeProps>(themeConfig);
ThemeContext.displayName = "ThemeContext";

export * from './ThemeProvider';
export * from './useTheme';

