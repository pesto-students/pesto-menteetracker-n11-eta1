import { configureStore } from '@reduxjs/toolkit';
import { firebaseReducer } from "react-redux-firebase"

import { signInReducer } from "../features/auth/middleware/signInSlice"
import { signUpReducer } from "../features/auth/middleware/signUpSlice"
import { authCheckerReducer } from "../features/auth/middleware/authCheckerSlice"
import { menteeReducer } from "../features/admin/middleware/menteeSlice"
import { mentorReducer } from "../features/admin/middleware/mentorSlice"
import { adminTeamReducer } from "../features/admin/middleware/adminTeamSlice"

const confStore = configureStore({
    reducer: {
        firebase: firebaseReducer,
        signIn: signInReducer,
        signUp: signUpReducer,
        authChecker: authCheckerReducer,
        mentee: menteeReducer,
        mentor: mentorReducer,
        adminTeam: adminTeamReducer,
    },

});

export default confStore;