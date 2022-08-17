import { ThemeOptions } from "@mui/material";

export default function Paper(theme: ThemeOptions) {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {

      }
    }
  }
}