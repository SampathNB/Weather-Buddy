import { formatTemperature, Icons } from "@utils";
import { Line } from "react-chartjs-2";
import { Chart, registerables, TooltipItem } from "chart.js";
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

  const weatherIcons = forecastDay
    ?.map((day: { condition: { icon: any } }, index: number) => {
      if (index % 2 === 0) {
        return day?.condition?.icon;
      }
    })
    .filter((day: any) => {
      return day;
    });

  const chanceOfRain = forecastDay
    ?.map((day: { condition: { icon: any } }, index: number) => {
      if (index % 2 === 0) {
        return day?.condition?.icon;
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
        icons: weatherIcons,
        // chanceOfRain : ,
        borderColor: "white",
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
                    size: 16,
                    weight: "bold",
                  };
                },
                formatter: function (_, context: any) {
                  console.log(context.chart.data);
                  const data = context.chart.data;
                  return `${formatTemperature(
                    data.datasets[0].data[context.dataIndex]
                  )}\n\n${data?.labels[context.dataIndex]}`;
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
                bottom: 20,
                top: 20,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
