import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Spinner } from 'react-bootstrap';

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  highTemp: number;
  lowTemp: number;
}

const WeatherPage: React.FC = () => {
  const { cityName } = useParams();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const YOUR_API_KEY="94d9aca99240db4e9d4e29af7653a158";
  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${YOUR_API_KEY}`
          
        );
        console.log(response)
        setWeather({
          temperature: response.data.main.temp,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          windSpeed: response.data.wind.speed,
          pressure: response.data.main.pressure,
          highTemp: response.data.main.temp_max,
          lowTemp: response.data.main.temp_min
        });
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [cityName]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      {weather && (
        <Card>
          <Card.Body>
           
      <h3 className="card-title mb-3">Weather in {cityName}</h3>
            <Card.Text>
              <p>Temperature: {weather.temperature}K</p>
              <p>Description: {weather.description}</p>
              <p>Humidity: {weather.humidity}%</p>
              <p>Wind Speed: {weather.windSpeed} m/s</p>
              <p>Pressure: {weather.pressure} hPa</p>
              <p>High Temp: {weather.highTemp}K</p>
              <p>Low Temp: {weather.lowTemp}K</p>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default WeatherPage;
