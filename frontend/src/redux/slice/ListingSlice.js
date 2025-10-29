import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BackendUrl } from "../../provider/Backendurl";

export const getListings = createAsyncThunk("fetch/getListing", async(_, {rejecteWithValue}) =>{
    try{
        const response = await fetch(`${BackendUrl}/listing`)
        const result =await response.json()
        if(response.status ==200){
            return result;
        }else{
            return rejecteWithValue(result.error)
        }
    }catch(error){
        return rejecteWithValue(error)
    }
})
export const getListingById =createAsyncThunk("fetch/getListingById", async(payload, {rejecteWithValue}) =>{
    try{
        const response = await fetch(`${BackendUrl}/listing/${payload}`)
        const result = await response.json()
        if(response.status ==200){
            return result;
        }else{
            return rejecteWithValue(result.error)
        }
    }catch(error){
        return rejecteWithValue(error)
    }
})
export const searchListing = createAsyncThunk("fetch/searchListing", async(payload, {rejecteWithValue}) =>{
    try{
        const response = await fetch(`${BackendUrl}/listing/search?query=${payload}`)
        const result = await response.json()
        if(response.status ==200){
            return result.listing
        }else{
            return rejecteWithValue(result.listing)
        }
    }catch(error){
        return rejecteWithValue(error)
    }
})

const listingSlice = createSlice({
    name: 'listing',
    initialState: {
        listing: [],
        detailedlisting:{},
        loading: false,
        error: false,
        subTotal: localStorage.getItem('subTotal')|| "",
        quantity: localStorage.getItem('quantity') || "",
        title: localStorage.getItem("title")|| "",
        taxes: localStorage.getItem('taxes') || ""
    },
    reducers: {
        handleTotal : (state, action)=>{
            localStorage.setItem('subTotal', action.payload.subTotal)
            localStorage.setItem('quantity', action.payload.quantity)
            localStorage.setItem('title', action.payload.title)
            localStorage.setItem('taxes', action.payload.taxes)
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getListings.pending, (state)=>{
            state.loading = true;
            state.error = false
        })
        .addCase(getListings.rejected, (state, action)=>{
            state.loading = false;
            state.error = true
        })
        .addCase(getListings.fulfilled, (state, action)=>{
            state.loading = false
            state.listing = action.payload;
        })
        .addCase(getListingById.pending, (state)=>{
            state.loading = true
        })
        .addCase(getListingById.rejected, (state, action)=>{
            state.loading = false;
            state.error
        })
        .addCase(getListingById.fulfilled, (state, action)=>{
            state.detailedlisting = action.payload;
            state.loading = false;
            state.error = false
        })
        .addCase(searchListing.pending, (state)=>{
            state.loading = true;
        })
        .addCase(searchListing.rejected, (state, action)=>{
            state.error = error;
            state.loading = error
            state.listing = action.payload
        })
        .addCase(searchListing.fulfilled, (state, action) =>{
            state.listing = action.payload;
            state.loading = false;
            state.error = false;
        })
    }
})

const listingsReducer = listingSlice.reducer;
export const {handleTotal} = listingSlice.actions;
export default listingsReducer;