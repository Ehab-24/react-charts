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

  const labels = Array.from(Array(50).keys());

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
        scales: {
          x: {
            stacked: true,
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
            data: labels.map(() => Math.ceil(Math.random() * 20)),
            backgroundColor: "rgba(150, 0, 0, 0.3)",
            borderWidth: 0.5,
          },
          {
            tension: 0.2,
            pointRadius: 0,
            fill: true,
            label: "Dataset 2",
            data: labels.map(() => Math.ceil(Math.random() * 20)),
            backgroundColor: "rgba(0, 150, 0, 0.3)",
            borderWidth: 0.5,
            borderColor: "lime",
          },
          {
            tension: 0.2,
            pointRadius: 0,
            fill: true,
            label: "Dataset 3",
            data: labels.map(() => Math.ceil(Math.random() * 20)),
            backgroundColor: "rgba(0, 0, 150, 0.3)",
            borderWidth: 0.5,
            borderColor: "blue",
          },
        ],
      }}
    />
  );
}
