import { Icons } from "@utils";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import { useForecastHook } from "./Forecast.hook";

Chart.register(...registerables, ChartDataLabels);

export const Forecast = () => {
  const { chartData, chartOptions } = useForecastHook();
  return (
    <div className="bg-white bg-opacity-10 xsm:p-5 p-3 xl:px-7 xl:rounded-[30px] md:rounded-2xl rounded-lg lg:w-2/3">
      <p className="flex items-center md:text-xl text-lg gap-2 font-medium xl:mb-9 mb-4">
        {Icons.Time} <span>24 hours forecast</span>
      </p>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};
