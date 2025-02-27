import { GET_USER, LOGIN_USER, SIGNUP_USER } from "../Action/User.action";

const initialstate = {
    signUpUser: '',
    loginUser: '',
    getUser:''

}

const AuthReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            return { ...state, signUpUser: action.payload }
        case LOGIN_USER:
            return { ...state, loginUser: action.payload }
        case GET_USER:
            return { ...state, getUser: action.payload }
        default:
            return state;
    }
}
export default AuthReducer;