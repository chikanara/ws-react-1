import axios from "axios"
import { GET_ALL_USERS, GET_ALL_USERS_FAIL, GET_ALL_USERS_SUCCESS, GET_USER_BY_ID, GET_USER_BY_ID_FAIL, GET_USER_BY_ID_SUCCES } from "../const"

export const getAllUsers = () => async (dispatch) => {
    dispatch({type:GET_ALL_USERS})
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch({type:GET_ALL_USERS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_ALL_USERS_FAIL,payload:error.response.data})
    }
}

export const getUserById = (id) => async (dispatch) => {
    dispatch({type:GET_USER_BY_ID})
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        dispatch({type:GET_USER_BY_ID_SUCCES,payload:data})
    } catch (error) {
        dispatch({type:GET_USER_BY_ID_FAIL,payload:error.response.data})
    }
}

