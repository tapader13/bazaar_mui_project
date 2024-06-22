import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { colors, createTheme, ThemeProvider } from '@mui/material';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);
const theme = createTheme({
  palette: {
    primary: {
      main: colors.grey[500],
    },
    secondary: {
      main: colors.pink[800],
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
