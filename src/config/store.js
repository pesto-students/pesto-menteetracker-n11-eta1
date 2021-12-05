import { configureStore } from '@reduxjs/toolkit';
import { firebaseReducer } from "react-redux-firebase"

import { signInReducer } from "../features/auth/middleware/signInSlice"
import { signUpReducer } from "../features/auth/middleware/signUpSlice"

const confStore = configureStore({
    reducer: {
        firebase: firebaseReducer,
        signIn: signInReducer,
        signUp: signUpReducer,
    },

});

export default confStore;