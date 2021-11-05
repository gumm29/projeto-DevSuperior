import axios from 'axios'
import { SaleSum } from 'model/sale'
import Chart from 'react-apexcharts'
import { BASE_URL } from 'utils/requests'

type CharData = {
  series: number[]
  labels: string[]
}

const DonutChart = () => {

  let chartData: CharData = { labels: [], series: []}

  axios.get(`${BASE_URL}/saler/sum-by-seller`).then(resp =>{
    const data = resp.data as SaleSum[]
    const labels = data.map(x => x.sellerName)
    const series = data.map(x => x.sum)
    chartData = { labels: labels, series: series}
    console.log(chartData)
  })

  const options = {
    legend: {
      show: true
    }
  }

  // const mockData = {
  //   series: [477138, 499928, 444867, 220426, 473088],
  //   labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  // }

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