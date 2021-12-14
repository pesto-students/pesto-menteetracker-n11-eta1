import axiosInstance from '../../../config/axios'

export const apiAddUser= async (userData) => {
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