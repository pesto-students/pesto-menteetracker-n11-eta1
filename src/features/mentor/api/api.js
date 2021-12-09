import axiosInstance from '../../../config/axios'

export const apiGetAllmentee= async () => {
    const response = await axiosInstance.get(
        "/api/admin/allmentees",
    )
    return response.data
}