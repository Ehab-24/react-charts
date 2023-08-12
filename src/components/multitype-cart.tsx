import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  ChartData,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data: ChartData<"bar" | "line"> = {
  labels,
  datasets: [
    {
      type: "line" as const,
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: true,
      backgroundColor: "rgba(150,0,0,0.3)",
      data: labels.map(() => Math.ceil(Math.random() * 100 - 50)),
    },
    {
      type: "bar" as const,
      label: "Dataset 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: labels.map(() => Math.ceil(Math.random() * 100 - 50)),
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar" as const,
      label: "Dataset 3",
      backgroundColor: "rgb(53, 162, 235)",
      data: labels.map(() => Math.ceil(Math.random() * 100 - 50)),
    },
  ],
};

export default function MultiTypeChart() {
  return <Chart type="bar" data={data} />;
}
