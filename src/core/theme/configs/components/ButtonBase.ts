
import { ThemeOptions } from "@mui/material";

export default function ButtonBase(theme: ThemeOptions) {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          textTransform: 'capitalize'
        }
      }
    }
  }
}