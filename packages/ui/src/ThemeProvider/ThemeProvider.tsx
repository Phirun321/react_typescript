import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./../theme";

interface IProps {
  children: React.ReactNode;
}
// eslint-disable-next-line react/display-name
export const PhirunThemeProvider: React.FC<IProps> = React.memo(
  ({ children }) => {
    // console.log("theme:: ", theme);
    return (
      <StyledThemeProvider theme={theme}>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MUIThemeProvider>
      </StyledThemeProvider>
    );
  }
);
