import { ADD_SAVE_POST, GET_POST, REMOVE_SAVE_POST } from "../Action/SavePost.action"

const initialState = {
    addSavePost: '',
    savedPosts: [],
    getPosts: ''
}

const SavePostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SAVE_POST:
            return {
                ...state,
                addSavePost: action.payload.addSavePost // ✅ Store saved posts
            };
        case REMOVE_SAVE_POST:
            return {
                ...state,
                savedPosts: state.savedPosts.filter(post => post.postId !== action.payload), // Remove post
            };
        case GET_POST:
            return {
                ...state,
                getPosts: action.payload // API se jo posts aayi hain, unhe update kar rahe hain
            };

        default:
            return state;
    }
}
export default SavePostReducer;