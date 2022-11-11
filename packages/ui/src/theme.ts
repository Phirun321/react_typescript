import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

const PRIMARY_TEXT_COLOR = '#15294B';
// Create a theme instance.
export default createTheme({
  typography: {
    fontFamily: `"Inter", sans-serif, DefaultFont`,
    button: {
      textTransform: 'none',
    },
    h2: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '24px',
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: '20px',
    },
  },
  palette: {
    primary: {
      main: '#2A7DE1',
      contrastText: '#fff',
    },
    secondary: {
      main: '#94d2f6',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: PRIMARY_TEXT_COLOR,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: PRIMARY_TEXT_COLOR,
        },
      },
      variants: [
        {
          props: {variant: 'sidebarTitle'},
          style: {
            color: '#505f79',
            fontSize: '0.875rem',
            lineHeight: '20px',
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: PRIMARY_TEXT_COLOR,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: {variant: 'z1primary'},
          style: {
            textTransform: 'none',
            fontWeight: 400,
            backgroundColor: '#0B4A7D',
            color: '#FFFFFF',
            border: '1px solid transparent',
            '&:hover': {
              border: '1px solid transparent',
              backgroundColor: '#003566',
            },
            '&.Mui-disabled': {
              color: '#FFFFFF',
              opacity: 0.38,
            },
          },
        },
        {
          props: {variant: 'z1cancel'},
          style: {
            textTransform: 'none',
            fontWeight: 400,
            border: '1px solid #C4C4C4',
            color: '#555555',
            '&:hover': {
              border: '1px solid #C4C4C4',
            },
            '&.Mui-disabled': {
              color: '#555555',
              opacity: 0.7,
            },
          },
        },
      ],
    },
  },
});
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    cancel: true;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    sidebarTitle: true;
  }
}
