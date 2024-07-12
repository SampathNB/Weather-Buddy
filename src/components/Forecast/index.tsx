import { formatTemperature, Icons } from "@utils";
import { Line } from "react-chartjs-2";
import { Chart, registerables, TooltipItem } from "chart.js";
import ChartDataLabels, { Context } from "chartjs-plugin-datalabels";
import { useSelector } from "react-redux";
import moment from "moment";
import { Tooltip } from "node_modules/chart.js/dist";

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

  const chanceOfRain = forecastDay
    ?.map((day: { chance_of_rain: number }, index: number) => {
      if (index % 2 === 0) {
        return day?.chance_of_rain;
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
        chanceOfRain: chanceOfRain,
        borderColor: "rgba(255,255,255,0.4)",
        tension: 0.3,
      },
    ],
  };
  return (
    <div className="bg-white bg-opacity-10 p-5 px-7 rounded-[40px] w-2/3">
      <p className="flex items-center text-xl gap-1 font-medium mb-9">
        {Icons.Time} <span>24-hour forecast</span>
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
                color: "#A36D07",
                font: function () {
                  return {
                    size: 14,
                    weight: "bold",
                  };
                },
                formatter: function (_, context: any) {
                  const data = context.chart.data;
                  // console.log(data);
                  return `${
                    data.datasets[0].data[context.dataIndex] + "°c"
                  }\n\n${data?.labels[context.dataIndex]}`;
                },
              },
            },
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
                ticks: {
                  stepSize: 2,
                },
              },
            },
            layout: {
              padding: {
                left: 20,
                right: 20,
                bottom: 40,
                top: 40,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
