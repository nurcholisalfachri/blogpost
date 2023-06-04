this app using state management context. if you want to switch to redux following this instruction:

1. in index.js, change to this,
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/Reducer/globalReducer';
<Provider store={storeRedux}>
    <Home />
</Provider>

2. in cardproduct, change to this,
import Counter from "./Counter";
<Counter />

3. in Home, change to this,
import Product from "../Pages/Product/Product";
<Route path="/product" element={<Product />} />