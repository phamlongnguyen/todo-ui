import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <CssBaseline />
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </SnackbarProvider>
  </StyledEngineProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
