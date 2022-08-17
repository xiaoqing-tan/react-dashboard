import React from "react";
import { PaletteMode } from "@mui/material";
import { ThemeProvider as Provider } from "@mui/material/styles";
import { ThemeContext, ThemeProps } from "./../theme";
import configTheme from './configs';

export const ThemeProvider = ({
  value,
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = React.useState<PaletteMode>(value.theme);
  const currTheme = React.useMemo(() => configTheme(theme), [theme]);
  console.log(currTheme)
  return (
    <ThemeContext.Provider value={{ theme: value.theme, setTheme }}>
      <Provider theme={currTheme}>{children}</Provider>
    </ThemeContext.Provider>
  );
};

export interface ThemeContextProviderProps {
  value: ThemeProps;
  children: React.ReactNode;
}
