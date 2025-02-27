import { ADD_SEND_POST, DELETE_SEND_POST, GET_SEND_POST } from "../Action/ProfileSendPost.action";

const initialState = {
    addSendPost: '',
    getSendPost: '',
    deleteSendPost:''
}

const SendPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SEND_POST:
            return { ...state, addSendPost: action.payload }
        case GET_SEND_POST:
            return { ...state, getSendPost: action.payload }
            case DELETE_SEND_POST:
                return { ...state, deleteSendPost: action.payload }
        default:
            return state;
    }
}
export default SendPostReducer;