import axios from 'axios'
import { useState, useEffect } from 'react'
import { SaleSum } from 'model/sale'
import Chart from 'react-apexcharts'
import { BASE_URL } from 'utils/requests'

type CharData = {
  series: number[]
  labels: string[]
}

const DonutChart = () => {

  const [chartData, setChartData] = useState<CharData>({ labels: [], series: []})

  useEffect(() => {
    axios.get(`${BASE_URL}/saler/sum-by-seller`).then(resp =>{
      const data = resp.data as SaleSum[]
      const labels = data.map(x => x.sellerName)
      const series = data.map(x => x.sum)
      setChartData({ labels: labels, series: series})
      console.log(chartData)
    })
  }, []);
  

  const options = {
    legend: {
      show: true
    }
  }

  return(
    <Chart
      options={{...options, labels: chartData.labels}}
      series={chartData.series}
      type='donut'
      height='240'
    />
  )
}

export default DonutChart