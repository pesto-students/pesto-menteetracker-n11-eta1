import React, { useState, useEffect } from 'react';
import ApexCharts from 'apexcharts';

import { apiGetMentorBarChart } from "../../api/api"

const BarChart = () => {
    var options = null;

    useEffect(async () => {
        const res = await apiGetMentorBarChart()
        options = {
            series: [{
                data: res.durations,
            }],
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: res.mentors,
            }
        };
        var chart = new ApexCharts(document.querySelector('#barchart'), options)
        chart.render()
    }, [])

    return (
        <div id="barchart" className="ml-52 w-auto" >
        </div>
    )
}

export default BarChart;