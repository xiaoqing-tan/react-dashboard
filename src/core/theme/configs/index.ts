import {
  createTheme,
} from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import Palette from "./palette";
import Typography from "./typography";
import Components from "./components";

const theme = (mode: PaletteMode) => {
  const options = {
    ...Palette(mode)
  }
  return createTheme({
    palette: Palette(mode).palette,
    typography: Typography(),
    components: Components(options)
  })
}

export default theme;