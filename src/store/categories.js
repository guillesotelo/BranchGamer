import {createReducer, createAsyncThunk,} from "@reduxjs/toolkit"
import axios from "axios"

export const getCategories = createAsyncThunk("GET_CATEGORIES", () => {
    console.log("GET_CATEGORIES")
    return axios.get(`/api/categories`)
        .then(res => res.data)
})

export const setNewCategory = createAsyncThunk("SET_NEW_CATEGORY", ({name, token}) => {
    console.log("SET_NEW_CATEGORY")
    return axios.post(`/api/categories?name=${name}`, {}, {
        headers : {authorization : token}
    })
})

export const removeCategory = createAsyncThunk("REMOVE_CATEGORY", ({id, token}) => {
    console.log("REMOVE_CATEGORY")
    return axios.delete(`/api/categories?id=${id}`, {
        headers : {authorization : token}
    })
})

export const editCategory = createAsyncThunk("EDIT_CATEGORY", ({id, name, token}) => {
    console.log("EDIT_CATEGORY")
    return axios.put(`/api/categories?id=${id}&name=${name}`, {}, {
        headers : {authorization : token}
    })
})

const categoriesReducer = createReducer({}, {
    [getCategories.fulfilled] : (state, action) => action.payload,
    [setNewCategory.fulfilled] : (state, action) => action.payload,
    [removeCategory.fulfilled] : (state, action) => action.payload,
    [editCategory.fulfilled] : (state, action) => action.payload
})

export default categoriesReducer