import { LOGIN_ADMIN } from "../Action/Admin.action";

const initialstate = {
    loginAdmin: '',
}

const AdminReducer = (state = initialstate, action) => {
    switch (action.type) {
        case LOGIN_ADMIN:
            return { ...state, loginAdmin: action.payload }
        default:
            return state;
    }
}
export default AdminReducer;