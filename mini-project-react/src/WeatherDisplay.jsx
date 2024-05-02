import React from 'react';

function WeatherDisplay({ weather }) {
    if (!weather) {
        return <p>No weather data available. Please search for a city.</p>;
    }

    return (
        <div>
            <h2>Weather in {weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Condition: {weather.weather[0].main}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} km/h</p>
        </div>
    );
}

export default WeatherDisplay;
