import axiosInstance from '../../../config/axios'

export const apiAddUser = async (userData) => {
    const response = await axiosInstance.post(
        "/api/user/adduser",
        userData
    )
    return response
}

export const apiCreateMentee = async (userData) => {
    const response = await axiosInstance.post(
        "/api/admin/creatementee",
        userData
    )
    return response
}

export const apiGetUser = async (uid) => {
    const response = await axiosInstance.get(
        "/api/user/getuser/" + uid,
    )
    return response.data
}

export const apiCreateMentor = async (userData) => {
    const response = await axiosInstance.post(
        "/api/admin/creatementor",
        userData
    )
    return response;
}