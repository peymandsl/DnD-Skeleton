import React from "react";
import { Helmet } from "react-helmet";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import Home from "../../components/Home";

const App = () => {
    const theme = createMuiTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 768,
            md: 1263,
            lg: 1366,
            xl: 1366,
          }
        }
      });
      return(
        <>
        <MuiThemeProvider theme={theme}>
            <Helmet
                titleTemplate={`%s - ${process.env.REACT_APP_NAME}`}
                defaultTitle={process.env.REACT_APP_NAME}
                />
            <Home />
        </MuiThemeProvider>
        </>
      )
    }


export default App;
