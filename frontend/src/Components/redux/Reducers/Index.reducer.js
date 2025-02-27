import { combineReducers } from "redux";
import AuthReducer from "./User.reducer";
import CategoryReducer from "./Category.reducer";
import ContactReducer from "./Contact.reducer";
import SendPostReducer from "./ProfileSendPost.reducer";
import SavePostReducer from "./SavePost.reducer";
import AdminReducer from "./Admin.reducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    category: CategoryReducer,
    contact:ContactReducer,
    SendPost:SendPostReducer,
    SavePost:SavePostReducer,
    admin:AdminReducer,
})
export default rootReducer;
