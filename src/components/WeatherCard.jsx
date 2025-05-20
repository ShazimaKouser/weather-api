import React from "react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const { main, weather, wind, name } = weatherData;
  const temperature = main.temp;
  const description = weather[0]?.description;
  const humidity = main.humidity;
  const windSpeed = wind.speed;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>🌡️Temperature: {temperature}°C</p>
      <p>💧Humidity: {humidity}%</p>
      <p>💨Wind Speed: {windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;