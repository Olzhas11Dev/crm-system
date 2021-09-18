import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    authInittial : []
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addtoData : (state,action) =>{state.authInittial.push(action.payload)}
    }
});

export const {addtoData} = authSlice.actions
export default authSlice.reducer