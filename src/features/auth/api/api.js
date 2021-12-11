import axiosInstance from '../../../config/axios'

export const apiAddUser= async (userData) => {
    const response = await axiosInstance.post(
        "/api/user/adduser",
        userData
    )
    return response
}