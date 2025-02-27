import { ADD_CONTACT, GET_CONTACT } from "../Action/Contact.action"

const initialstate = {
    addContact: '',
    getContacts: ''
}

const ContactReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return { ...state, addContact: action.payload };
        case GET_CONTACT:
            return { ...state, getContacts: action.payload };
        default:
            return state;
    }
}
export default ContactReducer;