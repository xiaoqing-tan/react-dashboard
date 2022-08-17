import { ThemeOptions } from "@mui/material";

export default function OutlinedInput(theme: ThemeOptions) {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `${theme.palette?.divider} 1px solid`
        }
      }
    }
  }
}