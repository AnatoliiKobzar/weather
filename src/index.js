import App from 'components/App';
import GlobalStyle from 'components/GlobalStyle/GlobalStyle';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/weather">
      <App />
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
);
