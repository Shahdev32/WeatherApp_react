import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import WeatherDisplay from './WeatherDisplay'; // Import the new component
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox() {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d95b538f61a50daca43b2770a443d44b";
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null); // New state for storing the weather data

    const getWeatherInfo = async () => {
        if (!city) {
            console.error("No city provided");
            return;
        }
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); // Added units parameter to get temperature in Celsius
            const jsonResponse = await response.json();
            if (response.ok) {
                setWeatherData(jsonResponse);
            } else {
                console.error("Error fetching weather data:", jsonResponse.message);
                setWeatherData(null);
            }
        } catch (error) {
            console.error("Failed to fetch weather data:", error);
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getWeatherInfo();
    };

    return (
        <div className='SearchBox'>
            <h1>Search for the Weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    value={city}
                    onChange={handleChange} 
                />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
            <WeatherDisplay weather={weatherData} />
        </div>
    );
}
