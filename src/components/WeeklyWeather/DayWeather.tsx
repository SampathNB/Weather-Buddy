import { WeatherCondition } from '../WeatherCondition'
import { Icons } from '@utils'

export const DayWeather = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <p className="flex items-center text-xl gap-1 font-medium mb-4">
          AIR Conditions
        </p>
        <div className="flex flex-col justify-between h-full gap-3 mb-4">
          <WeatherCondition
            icon={Icons.Temperature}
            condition="Real Feel"
            result="30°"
          />
          <WeatherCondition
            icon={Icons.Wind}
            condition="Wind"
            result="0.8 km/hr"
          />
          <WeatherCondition
            icon={Icons.Drop}
            condition="Chance of rain"
            result="2%"
          />
          <WeatherCondition icon={Icons.Sun} condition="UV Index" result="4" />
        </div>
      </div>
    </>
  )
}
