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
  return { chartData, iPadPro, mobile };
};
