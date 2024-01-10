import { createTheme } from '@mui/material/styles';

// from api
export const getColors = {
  primary: '#1976d2',
  secondary: '#1565c0',
  error: '#d32f2f',
  warning: '#ff9800',
  success: '#2e7d32',
  info: '#03a9f4',
};

export const FormTextThemes = createTheme({
  palette: {
    primary: {
      main: getColors['primary'],
    },
    secondary: {
      main: getColors['secondary'],
    },
    error: {
      main: getColors['error'],
    },
    warning: {
      main: getColors['warning'],
    },
    success: {
      main: getColors['success'],
    },
    info: {
      main: getColors['info'],
    },
  },
});
