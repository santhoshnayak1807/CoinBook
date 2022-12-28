import React from 'react'
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { withTheme } from 'styled-components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Chart = React.memo((props) => {

  const lineData = {
    labels: props.dataLabels,
    datasets: [
      {
        data: props.dataPoints,
        backgroundColor: props.theme.lineChartGradientTop,
        borderColor: props.theme.lineChart,
        fill:true,
        pointBackgroundColor: props.theme.lineChart,

      }
    ]
  }

  const lineOptions = {
    responsive: true,
    elements : {
      point: {
        radius:1,
        hitRadius:30,
        hoverRadius:4,
      },
      line: {
        tension: 0.4,
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
          drawTicks:false,
          borderWidth:0
        },
        ticks: {
          display: false
        }
      },
      x: {
        display: props.displayXAxis,
        grid:{
          display: false,
          borderWidth:0
        },
        ticks: {
          minRotation:0,
          maxRotation:0,
          callback: function(val , index) {
            return props.dataLabels[index].slice(3,5)
          },
          autoSkip:true,
          maxTicksLimit:15
        }
      }
    }
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
          drawTicks:false,
          borderWidth:0
        },
        ticks: {
          display: false
        }
      },
      x: {
        display: props.displayXAxis,
        grid:{
          display: false,
          borderWidth:0
        },
        ticks: {
          minRotation:0,
          maxRotation:0,
          callback: function(val , index) {
            return props.dataLabels[index].slice(3,5)
          },
          autoSkip:true,
          maxTicksLimit:15
        }
      }
    }
  }

  const barData = {
    labels: props.dataLabels,
    datasets: [{
      data: props.dataPoints,
      barPercentage: 0.93,
      backgroundColor: props.theme.barChart,
      borderWidth:0,
      borderRadius:5,
      borderSkipped:false
    }]
  }
  return (
    <>
      {props.type === 'Line' && <Line datasetIdKey='id' data={lineData} options={lineOptions} /> }
      {props.type === 'Bar' && <Bar datasetIdKey='id' data={barData} options={options} />}
    </>
  )
})

export default withTheme(Chart)