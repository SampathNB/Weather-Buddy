import { Icons } from "@utils";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import { useForecastHook } from "./Forecast.hook";

Chart.register(...registerables, ChartDataLabels);

export const Forecast = () => {
  const { chartData, iPadPro, mobile } = useForecastHook();
  return (
    <div className="bg-white bg-opacity-10 xsm:p-5 p-3 xl:px-7 xl:rounded-[30px] md:rounded-2xl rounded-lg lg:w-2/3">
      <p className="flex items-center md:text-xl text-lg gap-2 font-medium xl:mb-9 mb-4">
        {Icons.Time} <span>24 hours forecast</span>
      </p>
      <Line
        data={chartData}
        options={{
          elements: {
            point: {
              borderWidth: 2,
              backgroundColor: "white",
            },
          },
          aspectRatio: iPadPro ? 1.7 : mobile ? 1 : 2.5,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
            datalabels: {
              align: "center",
              anchor: "center",
              color: "#fff",
              font: function () {
                return {
                  size: mobile ? 11 : 13,
                  weight: "normal",
                };
              },
              formatter: function (
                _: any,
                context: { chart: { data: any }; dataIndex: string | number }
              ) {
                const data = context.chart.data;
                return `${data.datasets[0].data[context.dataIndex] + "°c"}\n\n${
                  data?.labels[context.dataIndex]
                }`;
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: "rgba(255,255,255,0.4)",
                font: {
                  size: mobile ? 10 : 12,
                },
              },
              border: {
                color: "rgba(255,255,255,0.15)",
              },
            },
            y: {
              grid: {
                display: false,
              },
              ticks: {
                stepSize: 2,
                color: "rgba(255,255,255,0.4)",
                font: {
                  size: mobile ? 10 : 12,
                },
              },
              border: {
                color: "rgba(255,255,255,0.15)",
              },
            },
          },
          layout: {
            padding: {
              top: mobile ? 0 : 25,
            },
          },
        }}
      />
    </div>
  );
};
