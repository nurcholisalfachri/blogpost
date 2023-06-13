import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './container/Home/Home';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './redux/Reducer/globalReducer';


// store
// const storeRedux = configureStore({reducer: rootReducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    {/* <Provider store={storeRedux}>
      <Home />
    </Provider> */}
  </React.StrictMode>
);

