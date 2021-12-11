import { configureStore } from '@reduxjs/toolkit';
import { firebaseReducer } from "react-redux-firebase"

import { signInReducer } from "../features/auth/middleware/signInSlice"
import { signUpReducer } from "../features/auth/middleware/signUpSlice"
import taskReducer from "../features/mentee/components/Task"

const confStore = configureStore({
    reducer: {
        firebase: firebaseReducer,
        signIn: signInReducer,
        signUp: signUpReducer,
        task: taskReducer
    },

});

export default confStore;