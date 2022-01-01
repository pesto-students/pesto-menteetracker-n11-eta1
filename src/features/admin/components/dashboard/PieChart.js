import React, { useState, useEffect } from 'react';
import ReactApexChart from "react-apexcharts";

import { apiGetMentorPieChart } from "../../api/api";

const PieChart = ({ mentorId }) => {
    const [data, setData] = useState(null)

    useEffect(async () => {
        console.log("piechart : ", mentorId)
        const res = await apiGetMentorPieChart(mentorId)
        const options = {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: res.teams,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300,
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
        setData({ options, res })
    }, [mentorId])
    console.log(data)
    return (
        <div id="chart" className="w-60 h-60">
            <ReactApexChart options={data ? data.options : {}} series={data ? data.res.durations : []}
                type="pie" width={380} />
        </div>
    )
}

export default PieChart;