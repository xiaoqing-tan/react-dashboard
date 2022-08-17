import { ThemeOptions } from "@mui/material";

export default function OutlinedInput(theme: ThemeOptions) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: '#eee 1px solid',
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: '#05aeff 1px solid',
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: '#05aeff 1px solid',
          }
        }
      }
    }
  }
}