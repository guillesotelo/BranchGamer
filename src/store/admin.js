import {createReducer, createAsyncThunk,} from "@reduxjs/toolkit"
import axios from "axios"

export const editUser = createAsyncThunk("EDIT_USER", (user) =>{
    return axios.put(`/api/users/${user.userId}`,user.userInputs)
})

export const getAllUsers = createAsyncThunk("GET_ALL_USERS", (token)=>{
    return axios.get("/api/users", {
        headers : {authorization : token}
    })
    .then((res)=> res.data)
})

export const setAdminUser = createAsyncThunk("SET_ADMIN_USER", (user)=>{
    console.log("SET_ADMIN_USER", user.token)
    const {userId, token} = user
    return axios.put(`/api/users/${userId}/admin`, {}, {
        headers : {authorization : token}
    })
})


const adminUserReducer = createReducer({}, {
    [getAllUsers.fulfilled] : (state, action) => action.payload, 
    // [editUser.fulfilled] : (state, action) => action.payload,
    [setAdminUser.fulfilled] : (state, action) => action.payload,
})

export default adminUserReducer