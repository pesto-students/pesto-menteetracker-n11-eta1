import React, { useState, useEffect } from 'react';
import ApexCharts from 'apexcharts';

import { apiGetMentorPieChart } from "features/admin/api/api";

const PieChart = () => {
    var options = null;

    useEffect(async () => {
        const user = JSON.parse(window.localStorage.getItem('user'))
        const res = await apiGetMentorPieChart(user.uid)
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