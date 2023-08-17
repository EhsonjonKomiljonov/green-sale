import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { LoadingProvider } from './context/loadingContext.jsx';
import { VerifyContactProvider } from './context/VerifyContactContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <LoadingProvider>
        <AuthProvider>
          <VerifyContactProvider>
            <App />
          </VerifyContactProvider>
        </AuthProvider>
      </LoadingProvider>
    </Provider>
  </BrowserRouter>
);
