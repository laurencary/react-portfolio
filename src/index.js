import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from "./context/Modal";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Root() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalProvider>
  );
}

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApplication();