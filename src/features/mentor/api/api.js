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
        "/api/mentor/profile/",
        sessionData
    )
    return response.data
}