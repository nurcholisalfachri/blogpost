import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import StatelessComp from './component/StatelessComp';
// import StatefullComp from './container/StatefullComp';
// import Product from './container/Product/Product';
import Home from './container/Home/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/Reducer/globalReducer';


// const globalState = {
//   totalOrder: 5
// }

// // reducer
// const rootReducer = (state = globalState, action) => {
//     if(action.type === ActionType.PLUS_ORDER) {
//       return {
//       ...state,
//       totalOrder: state.totalOrder + 1
//       }
//   }
//   if(action.type === ActionType.MINUS_ORDER) {
//       let totalOrder = 0;
//       if(state.totalOrder > 0) {
//       totalOrder = state.totalOrder -1
//       }
//       // agar tidak min nilainya
//       return {
//       ...state,
//       totalOrder: totalOrder
//       }
//   }
//   return state;
// }

// store
const storeRedux = createStore(rootReducer);
// const storeRedux = configureStore({reducer: rootReducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Provider store={storeRedux}>
      <Home />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
