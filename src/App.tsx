import React from 'react';
import Routes from './routes';
import GlobalStyle from './style/index';

import {BrowserRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes/>
    </BrowserRouter>
    <GlobalStyle/>
    <ToastContainer />
    </div>
  );
}

export default App;
