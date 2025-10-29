import {configureStore} from "@reduxjs/toolkit"
import listingsReducer from "../slice/listingSlice"

export const store = configureStore({
    reducer : {
        listings: listingsReducer
    }
})

export default store;