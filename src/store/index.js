import {configureStore} from "@reduxjs/toolkit";
import {receiveFirstTextReducer, receiveSecondTextReducer} from "./reducers/receiveText.reducer";
import resetTextReducer from "./reducers/resetText.reducer";

const store = configureStore({
    reducer: {
        firstReceivedText: receiveFirstTextReducer,
        secondReceivedText: receiveSecondTextReducer,
        resetText: resetTextReducer,
    },
});

export default store;