import axios from 'axios';
import { BASEURL } from "../../baseUrl";
import { toast } from "react-toastify";

export const ADD_CONTACT = "ADD_CONTACT"
export const GET_CONTACT = "GET_CONTACT"



const addContactAction = (payload)=>({type:ADD_CONTACT , payload:payload});
const getContactAction = (payload)=>({type:GET_CONTACT , payload:payload});


export const addContact = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${BASEURL}/contact/add`, payload).then((res) => {
                toast.success("sucessfully add in mail")
                dispatch(addContactAction(res.data))
                  dispatch(getAllContacts())
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            dispatch(addContactAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}
export const getAllContacts = () => {
    return async (dispatch) => {
        try {
            await axios.get(`${BASEURL}/contact/get`).then((res) => {
               
                dispatch(getContactAction(res.data))
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            dispatch(getContactAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}