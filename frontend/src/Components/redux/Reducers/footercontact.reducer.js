import { ADD_FOOTER_CONTACT } from "../Action/footercontact.action";

const initialstate = {
    addfooterContact: '',
   
}

const FootercontactReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_FOOTER_CONTACT:
            return { ...state, addfooterContact: action.payload };
        default:
            return state;
    }
}
export default FootercontactReducer;