import axios from "axios";
import { BASEURL } from "../../baseUrl";
import { toast } from "react-toastify";

export const ADD_SEND_POST = "ADD_SEND_POST"
export const GET_SEND_POST = "GET_SEND_POST"
export const DELETE_SEND_POST = "DELETE_SEND_POST"





const addSendPostAction = (payload)=>({type:ADD_SEND_POST,payload:payload})
const getSendPostAction = (payload)=>({type:GET_SEND_POST,payload:payload})
const deleteSendPostAction = (payload)=>({type:DELETE_SEND_POST,payload:payload})



export const addSendPost = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${BASEURL}/sendPost/add`, payload).then((res) => {
                toast.success("sucessfully add post for send post")
                dispatch(addSendPostAction(res.data))
                dispatch(getSendPostAction());
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            dispatch(addSendPostAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}

export const getSendPost = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${BASEURL}/sendPost/get`, payload).then((res) => {
               
                dispatch(getSendPostAction(res.data))
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            dispatch(getSendPostAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}
export const deleteSendPost = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${BASEURL}/sendPost/delete/${id}`).then((res) => {
                dispatch(deleteSendPostAction(res.data))
                toast.success('data delete successfully')
                dispatch(getSendPostAction());
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            dispatch(deleteSendPostAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}