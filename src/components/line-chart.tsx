import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

export default function AreaChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const labels = Array.from(Array(10).keys());

  return (
    <Line
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            position: "bottom" as const,
            text: "Area chart",
          },
        },
      }}
      data={{
        labels,
        datasets: [
          {
            tension: 0.2,
            pointRadius: 0,
            fill: true,
            label: "Dataset 1",
            data: [12, 20, 2, 5, 3, 4, 20, 2, 5, 3, 4],
            backgroundColor: "rgba(150, 0, 0, 0.3)",
            borderColor: "red",
            borderWidth: 0.75,
            pointBackgroundColor: "red",
          },
        ],
      }}
    />
  );
}
