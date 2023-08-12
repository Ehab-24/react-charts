import DoughnutChart from "./components/doughnut-chart";
import GroupedBarChart from "./components/grouped-bar-chart";
import HorizontalBarChart from "./components/horizontal-bar-chart";
import AreaChart from "./components/line-chart";
import PieChart from "./components/pie-chart";
import StackedBarChart from "./components/stacked-bar-chart";
import VertocalBarChart from "./components/vertical-bar-chart";
import MultiTypeChart from "./components/multitype-cart";

function App() {
  return (
    <div className=" w-full min-h-screen px-4 md:px-20 xl:px-40 py-20 bg-zinc-900 flex flex-col items-center gap-20">
      <h1 className="text-4xl font-bold text-stone-200">ChartJS</h1>

      <div className=" h-80 w-full flex justify-center">
        <VertocalBarChart />
      </div>

      <div className=" h-80 w-full flex justify-center">
        <HorizontalBarChart />
      </div>

      <div className=" h-80 w-full flex justify-center">
        <StackedBarChart />
      </div>

      <div className=" h-80 w-full flex justify-center">
        <GroupedBarChart />
      </div>

      <div className=" h-80 w-full flex justify-center">
        <AreaChart />
      </div>

      <div className=" h-80 w-full flex justify-center">
        <DoughnutChart />
      </div>

      <div className=" h-80 w-full flex justify-center">
        <PieChart />
      </div>

      <div className=" h-80 w-full flex justify-center">
        <MultiTypeChart />
      </div>
    </div>
  );
}

export default App;
