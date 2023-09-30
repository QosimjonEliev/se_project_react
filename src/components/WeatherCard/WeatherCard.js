import { weatherConditions } from "../../utils/constants";
import { findWeatherOption } from "../../utils/weatherApi";
import "./WeatherCard.css";

const WeatherCard = ({ day, weather, weatherTemp }) => {
  const weatherOption = weatherConditions.filter((option) =>
    findWeatherOption(option, day, weather)
  );

  const imageSrcUrl = weatherOption[0].url || "";

  return (
    <div className="weather">
      <p className="weather__info">{weatherTemp}°F</p>
      <img
        className="weather__image"
        src={imageSrcUrl}
        alt={weatherOption[0].weather}
      />
    </div>
  );
};

export default WeatherCard;
