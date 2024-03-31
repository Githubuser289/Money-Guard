import '~node_modules/modern-normalize/modern-normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import './index.css';
import theme from './styles/theme.js';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { GlobalStyles } from './styles/GlobalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="Money-Guard">
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <GlobalStyles />
        </PersistGate>
      </BrowserRouter>
    </ThemeProvider>
  </ReduxProvider>
);
