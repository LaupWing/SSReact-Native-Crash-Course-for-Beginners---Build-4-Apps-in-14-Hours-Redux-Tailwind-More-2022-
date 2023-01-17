import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   origin: null,
   destination: null,
   travelTimeInformation: null
}

export const navSlice = createSlice({
   name: "nav",
   initialState,
   reducers:{
      setOrigin(state, action){
         state.origin = action.payload
      },
      setDestination(state, action){
         state.destination = action.payload
      },
      setTravelTimeInformation(state, action){
         state.travelTimeInformation = action.payload
      },
   }
})

export const {
   setDestination,
   setOrigin,
   setTravelTimeInformation
} = navSlice.actions

export const selectOrigin = state => state.origin 
export const selectDestination = state => state.destination 
export const selectTravelTimeInformation = state => state.travelTimeInformation 

export default navSlice.reducer
