import axios from 'axios';
import { BASEURL } from "../../baseUrl";
import { toast } from "react-toastify";

export const ADD_FOOTER_CONTACT = "ADD_FOOTER_CONTACT"

const addfooterContactAction = (payload)=>({type:ADD_FOOTER_CONTACT , payload:payload});

export const addfooterContact = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${BASEURL}/footercontact/add`, payload).then((res) => {
                toast.success("sucessfully add in mail")
                dispatch(addfooterContactAction(res.data))
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            dispatch(addfooterContactAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}
