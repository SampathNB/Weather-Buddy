import { Icons } from "@utils";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useSelector } from "react-redux";
import moment from "moment";

Chart.register(...registerables, ChartDataLabels);

export const Forecast = () => {
  const weather = useSelector((state: any) => state.weatherDetails);

  const forecastDay = weather?.weatherData?.forecast?.forecastday[0].hour;

  const temperatures = forecastDay
    ?.map((day: { temp_c: any }, index: number) => {
      if (index % 2 === 0) {
        return day?.temp_c;
      }
    })
    .filter((day: any) => {
      return day;
    });

  const times = forecastDay
    ?.map((day: { time_epoch: number }, index: number) => {
      if (index % 2 === 0) {
        return moment.unix(day?.time_epoch).format("HH:mm");
      }
    })
    .filter((day: any) => {
      return day;
    });

  const data = {
    labels: times,
    datasets: [
      {
        data: temperatures,
        fill: false,
        borderColor: "rgba(255,255,255,0.15)",
        tension: 0.3,
      },
    ],
  };
  return (
    <div className="bg-white bg-opacity-10 p-5 px-7 rounded-[40px] w-2/3">
      <p className="flex items-center text-xl gap-1 font-medium mb-9">
        {Icons.Time} <span>24 hours forecast</span>
      </p>
      <div>
        <Line
          data={data}
          options={{
            elements: {
              point: {
                borderWidth: 2,
                backgroundColor: "white",
              },
            },
            aspectRatio: 2.5,
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
                    size: 13,
                    weight: "normal",
                  };
                },
                formatter: function (_, context: any) {
                  const data = context.chart.data;
                  return `${
                    data.datasets[0].data[context.dataIndex] + "°c"
                  }\n\n${data?.labels[context.dataIndex]}`;
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
                },
                border: {
                  color: "rgba(255,255,255,0.15)",
                },
              },
            },
            layout: {
              padding: {
                top: 25,
                left: 20,
                right: 20,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
