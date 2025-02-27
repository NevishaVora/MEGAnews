import axios from "axios";
import { BASEURL } from "../../baseUrl";
import { toast } from "react-toastify";

export const ADD_SAVE_POST = "ADD_SAVE_POST"
export const REMOVE_SAVE_POST = "REMOVE_SAVE_POST";
export const GET_POST = "GET_POST";


const addSavePostAction = (payload)=>({type:ADD_SAVE_POST,payload:payload})
const removeSavePostAction = (postId) => ({ type: REMOVE_SAVE_POST, payload: postId });
const getSavePostAction = (payload) => ({ type: GET_POST, payload: payload  || [] });



export const addSavePost = (userId, payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASEURL}/savedPost/save/${userId}`, payload);
            const data = response.data;

            if (data.message === "Post saved successfully") {
                dispatch(addSavePostAction(data.savedPost));
                toast.success("Post saved successfully!");
            } else if (data.message === "Post unsaved successfully") {
                dispatch(removeSavePostAction(payload.postId));
                toast.info("Post unsaved successfully!");
            }

            return data;  // ✅ Return API Response to handle in component
        } catch (error) {
            console.error(error);
            return null;
        }
    };
};


export const getSavePost = (userId) => {
    return async (dispatch) => {
        try {
            await axios.get(`${BASEURL}/savedPost/saved/${userId}`).then((res) => { 
                // console.log("Fetched Saved Posts:", res.data); 
                dispatch(getSavePostAction(res.data))
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            dispatch(getSavePostAction(error.response?.data || error.message))
            toast.error("something went error")
        }
    }
}