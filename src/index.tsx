import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import { DrawerProvider } from './providers/DrawerProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  [{
    path: '/',
    element: <App />,
  }],
  {
    basename: process.env.PUBLIC_URL,
  }
);


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DrawerProvider>
        <RouterProvider router={router} />
      </DrawerProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
