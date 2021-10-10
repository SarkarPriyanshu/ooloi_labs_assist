import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './redux/store/store.js'
import { Provider } from 'react-redux';
import { persistor } from './redux/store/store'
import { PersistGate } from 'redux-persist/integration/react';
import '../src/css/style.css'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate >
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

