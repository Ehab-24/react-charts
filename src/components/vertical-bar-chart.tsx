import {
  Chart as ChartJS,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export default function VertocalBarChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    Legend,
    Title,
    Tooltip,
    BarElement
  );

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <Bar
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            position: "bottom" as const,
            text: "Vertical bar chart",
          },
        },
      }}
      data={{
        labels,
        datasets: [
          {
            label: "Dataset 1",
            data: labels.map(() => Math.ceil(Math.random() * 100)),
            backgroundColor: "rgba(227, 110, 64, 1.0)",
          },
          {
            label: "Dataset 2",
            data: labels.map(() => Math.ceil(Math.random() * 100)),
            backgroundColor: "rgba(64, 156, 227, 1.0)",
          },
        ],
      }}
    />
  );
}
