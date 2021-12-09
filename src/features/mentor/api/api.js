import axiosInstance from '../../../config/axios'

export const apiGetAllMentorSession = async (mentorid) => {
    const response = await axiosInstance.get(
        "/api/mentor/allsessions/" + mentorid,
    )
    return response.data
}