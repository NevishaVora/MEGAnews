import axios from 'axios';
import { BASEURL } from "../../baseUrl";
import { toast } from "react-toastify";

export const ADD_CATEGORY = "ADD_CATEGORY"
export const GET_ALL_CATEGORY = "GET_ALL_CATEGORY"
export const GET_CATEGORY = "GET_CATEGORY"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
export const DELETE_CATEGORY = "DELETE_CATEGORY"

const addCategoryAction = (payload)=>({type:ADD_CATEGORY , payload:payload});
const getAllCategoryAction = (payload)=>({type:GET_ALL_CATEGORY , payload:payload});
const getCategoryAction = (payload)=>({type:GET_CATEGORY , payload:payload});
const updateCategoryAction = (payload)=>({type:UPDATE_CATEGORY , payload:payload});
const deleteCategoryAction = (payload)=>({type:DELETE_CATEGORY , payload:payload});



export const addCategory = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${BASEURL}/category/add`, payload).then((res) => {
                toast.success("sucessfully add category")
                dispatch(addCategoryAction(res.data))
                dispatch(getAllCategory())
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            dispatch(addCategoryAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}

export const getAllCategory = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${BASEURL}/category/get`, payload).then((res) => {
                dispatch(getAllCategoryAction(res.data))
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            dispatch(getAllCategoryAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}
export const getCategory = (id) => {
    return async (dispatch) => {
        try {
            await axios.get(`${BASEURL}/category/get-one/${id}`).then((res) => {
                dispatch(getCategoryAction(res.data))
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            dispatch(getAllCategoryAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}


export const updateCategory = (id,payload) => {
    return async (dispatch) => {
        try {
            await axios.put(`${BASEURL}/category/update/${id}`, payload).then((res) => {
                dispatch(updateCategoryAction(res.data))
                toast.success('data update successfully')
                dispatch(getAllCategory())
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            dispatch(updateCategoryAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}
export const deleteCategory = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${BASEURL}/category/delete/${id}`).then((res) => {
                dispatch(deleteCategoryAction(res.data))
                toast.success('data delete successfully')
                dispatch(getAllCategory())
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            dispatch(deleteCategoryAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}
