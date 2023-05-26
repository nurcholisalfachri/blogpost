import pkg from "@reduxjs/toolkit";
const { createSlice, configureStore } = pkg;

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        age: 17
    },
    reducers: {
        ADD_AGE: state => {
            state.age += coba.newAge
        },
        CHANGE_VALUE: state => {
            state.value += coba.newValue
        }
    }
})

export const { ADD_AGE, CHANGE_VALUE, coba = {newValue: 2, newAge: 5} } = counterSlice.actions

// store
const store = configureStore({reducer: counterSlice.reducer});
console.log(store.getState());

// subscription
store.subscribe(() => {
    console.log('store change: ', store.getState());
})

// dispatching action
store.dispatch(ADD_AGE())
store.dispatch(CHANGE_VALUE())
store.dispatch(CHANGE_VALUE())
console.log(store.getState());
