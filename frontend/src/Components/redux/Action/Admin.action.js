import axios from "axios";
import { BASEURL } from "../../baseUrl";
import { toast } from "react-toastify";

export const LOGIN_ADMIN = 'LOGIN_ADMIN'

const loginAdminAction = (payload) => ({ type: LOGIN_ADMIN, payload: payload });

// const getAuthHeaders = () => {
//     const token = localStorage.getItem('token');
//     return {
//         headers: {
//             Authorization: `Bearer ${token}`
//         },
//     };
// };



export const adminLogin = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASEURL}/admin/login`, payload);
            toast.success("Successfully logged in");
            dispatch(loginAdminAction(response.data));
            const token = response.data.accessToken;
            localStorage.setItem("login", true);
            localStorage.setItem("admintoken", token); 
            return response.data; // Isko return karenge taaki handleSubmitLogin function isko check kar sake
        } catch (error) {
            console.log(error);
            dispatch(loginAdminAction(error.response?.data || error.message));
            toast.error("This email Id is not exists");
            return null; // Error hone pe null return karega
        }
    };
};


