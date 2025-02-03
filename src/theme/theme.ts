import createTheme from "@mui/material/styles/createTheme";
import SpaceGrotesk from "../assets/styles/space-grotesk.ttf";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      dark: '#779393'
    },
    text: {
      primary: '#fff',
      secondary: '#779393'
    }
  },
  typography: {
    fontFamily: 'SpaceGrotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    fontSize: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: SpaceGrotesk;
          src: url(${SpaceGrotesk});
          font-weight: normal;
          font-style: normal;
        }
      `,
    },
  }
});