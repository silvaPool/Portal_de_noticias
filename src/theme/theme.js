import * as React from 'react';
import { createTheme,  ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    primary: {
      main: '#696969',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    h1: {
      fontSize: '4rem',
      fontWeight: 500,
      marginLeft: '2rem',
      marginTop: '2rem',
      marginBottom: '5rem',
      borderBottom: '2px solid black',
      width: '30%',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 200,
      marginLeft: '2rem',
      marginTop: '2rem',
      marginBottom: '5rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: 'black',
          width: '10vw',
          height: '4vh',
          borderRadius: '1rem',
          '&:hover': {
            color: 'black',
            backgroundColor: 'white',
          },
        },
        outlined: {
          color: 'white',
          border:'1px solid white',
          width:'20%'
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          color: 'black',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'clip',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
  },
});

export default theme;