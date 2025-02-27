import axios from "axios";
import { BASEURL } from "../../baseUrl";
import { toast } from "react-toastify";

export const SIGNUP_USER = 'SIGNUP_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const GET_USER = 'GET_USER'

const signupUserAction = (payload) => ({ type: SIGNUP_USER, payload: payload });
const loginUserAction = (payload) => ({ type: LOGIN_USER, payload: payload });
const getUserAction = (payload) => ({ type: GET_USER, payload: payload });

const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };
};

export const userSignUp = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${BASEURL}/auth/signUp`, payload).then((res) => {
                toast.success("sucessfully signUp")
                dispatch(signupUserAction(res.data))
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            dispatch(signupUserAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}

export const userLogin = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${BASEURL}/auth/login`, payload).then((res) => {
                toast.success("sucessfully login")
                dispatch(loginUserAction(res.data))
                const token = res.data.accessToken;
                localStorage.setItem("login", true);
                localStorage.setItem("username", res?.data?.existUser?.username);
                localStorage.setItem("token", token);
                localStorage.setItem("userId", res?.data?.existUser?._id);
            })
        } catch (error) {
            console.log(error)
            dispatch(loginUserAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}


export const userGet = () => {
    return async (dispatch) => {
        try {
            await axios.get(`${BASEURL}/auth/get-user`, getAuthHeaders()).then((res) => {
                // toast.success("sucessfully get")
                dispatch(getUserAction(res.data))
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            dispatch(getUserAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}