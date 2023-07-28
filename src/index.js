import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// import Routing from './layout/routes/Routing';
// import ReduxFile from './layout/reduxFile';
import  store  from "./redux/store";
import { Provider } from 'react-redux';
// import { connectRouter } from 'connected-react-router';
import App from './App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <connectedRouter> */}
      <App />
    {/* </connectedRouter> */}
  </Provider>
);

reportWebVitals();
