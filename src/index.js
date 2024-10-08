import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {persistor, store} from './redux/store'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}> 

        <PersistGate loading ={'loading'} persistor={persistor}>

          <App />      
        </PersistGate>
    
    </Provider>
   
  </React.StrictMode>
);

