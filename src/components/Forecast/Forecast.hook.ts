import { useMediaQuery } from "@hooks";
import moment from "moment";
import { useSelector } from "react-redux";

export const useForecastHook = () => {
  const iPadPro = useMediaQuery("(max-width: 1279px)");
  const mobile = useMediaQuery("(max-width: 480px)");

  const weather = useSelector((state: any) => state.weatherDetails);

  const forecastDay =
    weather?.weatherData.weatherData?.forecast?.forecastday[0].hour;

  const dividend = mobile ? 3 : 2;

  const temperatures = forecastDay
    ?.map((day: { temp_c: any }, index: number) => {
      if (index % dividend === 0) {
        return day?.temp_c;
      }
    })
    .filter((day: any) => {
      return day;
    });

  const times = forecastDay
    ?.map((day: { time_epoch: number }, index: number) => {
      if (index % dividend === 0) {
        return moment.unix(day?.time_epoch).format("HH:mm");
      }
    })
    .filter((day: any) => {
      return day;
    });

  const chartData = {
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
  const chartOptions = {
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
  };
  return { chartData, chartOptions };
};
