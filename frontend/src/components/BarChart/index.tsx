import Chart from 'react-apexcharts'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from 'utils/requests'
import { SaleSuccess } from 'model/sale'
import { round } from 'utils/format'

type SeriesData = {
  name: string
  data: number[]
}

type ChartData = {
  labels:{
    categories: string[]
  }
  series: SeriesData[]
}

const BarChart = () => {

  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        name: "",
        data: []
      }
    ]
  })

  useEffect(() => {
    axios.get(`${BASE_URL}/saler/success-by-seller`).then(resp =>{
      const data = resp.data as SaleSuccess[]
      const labels = data.map(x => x.sellerName)
      const series = data.map(x => round(100.0 * x.deals / x.visited, 1))
      setChartData({ labels: { categories: labels },
        series: [
          {
            name: "% Sucesso",
            data: series
          }
        ]
      })
    })
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  }

  return(
    <Chart
      options={{...options, xaxis: chartData.labels}}
      series={chartData.series}
      type='bar'
      height='240'
    />
  )
}

export default BarChart