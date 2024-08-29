import { configureStore } from '@reduxjs/toolkit';


const counterLogic = (state = 0, action) => {
    switch (action.type) {
        case "add":
            return state + 1;

        case "sub":
            return state - 1;

        default:
            // If no action type matches, return the current state
            return state;
    }
};

const storeMyDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case "saveDetails":
            console.log("Saving details:", action.data); // Log the data
            return action.data;
        default:
            return state;
    }
};


export const myStore = configureStore({
    reducer: {
        "counter": counterLogic,
        "myDetails": storeMyDetailsReducer
    }
});
