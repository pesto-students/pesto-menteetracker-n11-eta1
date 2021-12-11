import axiosInstance from '../../../config/axios'

export const apiGetAllmentee= async () => {
    const response = await axiosInstance.get(
        "/api/admin/allmentees",
    )
    return response.data
}

export const apiGetAllmentor = async () => {
    const response = await axiosInstance.get(
        "/api/admin/allmentors",
    )
    console.log(response.data)
    return response.data
}

export const apiGetAlladminTeam = async () => {
    const response = await axiosInstance.get(
        "/api/admin/allteams",
    )
    console.log(response.data)
    return response.data
}