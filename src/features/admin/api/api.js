import axiosInstance from '../../../config/axios'

export const apiGetAllmentee = async () => {
    const response = await axiosInstance.get(
        "/api/admin/allmentees",
    )
    return response.data
}

export const apiGetAllmentor = async () => {
    const response = await axiosInstance.get(
        "/api/admin/allmentors",
    )
    return response.data;
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
    return response
}

export const apiCreateBatch = async (batchData) => {
    const response = await axiosInstance.post(
        "/api/admin/createbatch",
        batchData
    )
    return response
}

export const apiCreateTeam = async (teamData) => {
    const response = await axiosInstance.post(
        "/api/admin/createteam",
        teamData
    )
    return response
}

export const apiGetMentorPieChart = async (mentorid) => {
    const response = await axiosInstance.get(
        "/api/admin/piechart/" + mentorid,
    )
    const durations = response.data.map(ele => ele.duration);
    const teams = response.data.map(ele => ele.team);
    return { durations, teams }
}

export const apiGetMentorBarChart = async () => {
    const response = await axiosInstance.get(
        "/api/admin/barchart",
    )
    var res = {}
    response.data.sessions.map(ele => {
        if (ele.mentorid in res) {
            const totalDuration = res[ele.mentorid] + ele.duration;
            res[ele.mentorid] = totalDuration;
        } else {
            res[ele.mentorid] = ele.duration;
        }
    });
    const mentors = Object.keys(res).map(ele => {
        const mentor = response.data.mentors.find(o => o.uid === ele);
        return mentor.name
    })
    const data = { mentors: mentors, durations: Object.values(res) };
    return data;
}