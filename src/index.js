import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme.js';
import { GlobalStyles } from './styles/GlobalStyles';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      <BrowserRouter basename="/Money-Guard">
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </ThemeProvider>
);
