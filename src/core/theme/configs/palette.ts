import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

const config = {
  light: {
    text: {
      primary: "#122336",
      secondary: "#064187",
      disabled: "#999",
    },
    common: {
      black: "#000",
      white: "#ccc",
    },
    primary: {
      main: "#064187",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#f7f7f7",
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
      paper: "#111",
      default: "#222",
    },
    divider: "#333",
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
