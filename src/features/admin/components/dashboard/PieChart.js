import React, { useState, useEffect } from 'react';
import ApexCharts from 'apexcharts';

import { apiGetMentorPieChart } from "../../api/api"

const PieChart = () => {
    var options = null;

    useEffect(async () => {
        const res = await apiGetMentorPieChart("8LPM3YUWRkUHiIA08qGbXfFCvKO2")
        options = {
            series: res.durations,
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
        var chart = new ApexCharts(document.querySelector('#piechart'), options)
        chart.render()
    }, [])

    return (
        <div id="piechart" className="w-60 h-60">
        </div>
    )
}

export default PieChart;