// libraries
import React, { useState } from 'react';
// api
import { getCurrentWeather } from 'api/weather';
// components
import Form from 'components/shared/Form';
import WeatherCard from 'components/WeatherCard';
// styles
import './App.css';


const App = () => {
    const [weatherData, setWeatherData] = useState(null);

    return (
        <div className="container">
            <h2 className="page-title">Get Weather for free!</h2>
            <Form onSubmitCallback={setWeatherData} />

            {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>
    );
};

export default App;
