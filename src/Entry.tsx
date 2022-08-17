import CssBaseline from "@mui/material/CssBaseline";
import { Provider as ReduxProvider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles"
import 'chart.js/auto';

import {
  RouterContext,
  AuthContext,
  defaultAuth,
  RoutesComponent,
  ThemeProvider,
  themeConfig
} from "./core";
import { routes } from "./routes/Index";
import store from "./store";
import "./i18n";

export const Entry = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider value={themeConfig}>
        <CssBaseline />
        <ReduxProvider store={store}>
          <AuthContext.Provider value={defaultAuth}>
              <RouterContext.Provider value={routes}>
                <RoutesComponent />
              </RouterContext.Provider>
          </AuthContext.Provider>
        </ReduxProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Entry;
