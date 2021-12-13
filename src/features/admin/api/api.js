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
    return response.data
}

export const apiGetAlladminTeam = async () => {
    const response = await axiosInstance.get(
        "/api/admin/allteams",
    )
    return response.data
}

export const apiGetAllBatches = async () => {
    const response = await axiosInstance.get(
        "/api/admin/allbatches",
    )
    return response.data
}

export const apiGetAllTeams = async () => {
    const response = await axiosInstance.get(
        "/api/admin/allteams",
    )
    return response.data
}

export const apiCreateMentee = async (mentee) => {
    const response = await axiosInstance.post(
        "/api/admin/creatementee",
    )
    return response.data
}