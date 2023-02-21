import { configureStore } from "@reduxjs/toolkit";
// import userReducer from './firebase/UserSlice';
import userReducer from "../components/UserSlice";
import QuestionReducer from '../components/QuestionSlice'
export default configureStore ({
    reducer : {
        user : userReducer ,
        question : QuestionReducer, 
    }
})