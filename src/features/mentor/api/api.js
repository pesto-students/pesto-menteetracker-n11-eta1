import axiosInstance from '../../../config/axios'

export const apiGetAllMentorSession = async (mentorid) => {
    const response = await axiosInstance.get(
        "/api/mentor/allsessions/" + mentorid,
    )
    return response.data
}

export const apiGetAllmentorTeam = async (mentorid) => {
    const response = await axiosInstance.get(
        "/api/mentor/allsessions/" + mentorid,
    )
    return response.data
}

export const apiGetMentorProfile = async (mentorid) => {
    const response = await axiosInstance.get(
        "/api/mentor/profile/" + mentorid,
    )
    return response.data
}

//create session
export const apiCreateSession = async (sessionData) => {
    const response = await axiosInstance.post(
        "/api/mentor/createsession",
        sessionData
    )
    return response
}

//edit session
export const apiEditSession = async (sessionData, sessionId) => {
    const response = await axiosInstance.post(
        "/api/mentor/updatesession/" + sessionId,
        sessionData
    )
    return response
}

//get session
export const apiGetSession = async (sessionId) => {
    const response = await axiosInstance.get(
        "/api/mentor/getsession/" + sessionId,
    )
    return response.data
}

//edit profile
export const apiUpdateProfile = async (mentorData, profileId) => {
    const response = await axiosInstance.post(
        "/api/mentor/updatprofile/" + profileId,
        mentorData
    );
    return response;
}

// dashboards
export const apiGetMentorBatchsBarChart = async () => {
    const mentorId = "8LPM3YUWRkUHiIA08qGbXfFCvKO2"
    const response = await axiosInstance.get(
        "/api/mentor/barchart/" + mentorId,
    )
    var res = {}
    response.data.map(ele => {
        if (ele.mentorid in res) {
            const totalDuration = res[ele.batch] + ele.duration;
            res[ele.batch] = totalDuration;
        } else {
            res[ele.batch] = ele.duration;
        }
    });
    const data = { batches: Object.keys(res), durations: Object.values(res) };
    console.log(data)
    return data;
}