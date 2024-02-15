import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  type: 'doughnut',
  labels: ['Anciens', 'Nouveaux'],
  datasets: [
    {
      label: '# of Votes',
      data: [55, 45],
      layout: 20,
      backgroundColor: ['rgba(240, 125, 0, 0.2)', 'rgba(240, 125, 0)'],
      borderWidth: 0,
    },
  ],
}

export function Graph() {
  return <Doughnut data={data} />
}
