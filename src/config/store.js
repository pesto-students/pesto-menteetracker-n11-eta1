import { configureStore } from '@reduxjs/toolkit';
import { firebaseReducer } from "react-redux-firebase"

import { signInReducer } from "../features/auth/middleware/signInSlice"
import { signUpReducer } from "../features/auth/middleware/signUpSlice"
import { authCheckerReducer } from "../features/auth/middleware/authCheckerSlice"
import { menteeReducer } from "../features/admin/middleware/menteeSlice"
import { mentorReducer } from "../features/admin/middleware/mentorSlice"
import { adminTeamReducer } from "../features/admin/middleware/adminTeamSlice"
import { mentorSessionReducer } from "../features/mentor/middleware/mentorSessionSlice"
import { mentorTeamReducer } from "../features/mentor/middleware/mentorTeamSlice"
import { mentorProfileReducer } from "../features/mentor/middleware/mentorProfileSlice"


const confStore = configureStore({
    reducer: {
        firebase: firebaseReducer,
        signIn: signInReducer,
        signUp: signUpReducer,
        authChecker: authCheckerReducer,
        mentee: menteeReducer,
        mentor: mentorReducer,
        adminTeam: adminTeamReducer,
        mentorSession: mentorSessionReducer,
        mentorTeam: mentorTeamReducer,
        mentorProfile: mentorProfileReducer,
    },

});

export default confStore;