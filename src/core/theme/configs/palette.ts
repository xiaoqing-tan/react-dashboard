import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

const config = {
  light: {
    text: {
      primary: "#122336",
      secondary: "#2b6be8",
      disabled: "#999",
    },
    common: {
      black: "#000",
      white: "#ccc",
    },
    primary: {
      main: "#2b6be8",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#f3f3f3",
    },
    divider: "#eee",
  },
  dark: {
    text: {
      primary: "#fff",
      secondary: "#eee",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      paper: "#111936",
      default: "#212946",
    },
    divider: "#2c3548",
  },
};

export default function Palette(mode: PaletteMode) {
  return createTheme({
    palette: {
      mode,
      ...config[mode],
    },
  });
}
