import { ADD_CATEGORY, DELETE_CATEGORY, GET_ALL_CATEGORY, GET_CATEGORY, getCategory, UPDATE_CATEGORY } from "../Action/Category.action"

const initialstate = {
    addCategory: '',
    getAllCategory: '',
    getCategory: '',
    updateCategory: '',
    deleteCategory: '',
}

const CategoryReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return { ...state, addCategory: action.payload };
        case GET_ALL_CATEGORY:
            return { ...state, getAllCategory: action.payload };
        case GET_CATEGORY:
            return { ...state, getCategory: action.payload };
        case UPDATE_CATEGORY:
            return { ...state, updateCategory: action.payload };
        case DELETE_CATEGORY:
            return { ...state, deleteCategory: action.payload };
        default:
            return state;
    }
}

export default CategoryReducer;