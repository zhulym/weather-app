// libraries
import React, { useState } from 'react';
// api
import { getCurrentWeather } from '../api/weather';
// components
import Form from './shared/Form/index';
import WeatherCard from './WeatherCard/index';
// styles
import './App.css';


const App = () => {
    const [weatherData, setWeatherData] = useState(null);

    return (
        <div className="container">
            <h2 className="page-title">Get Weather for free!</h2>
            <Form onSubmitCallback={setWeatherData} />
            <div className="weathercard__wrap">
                {weatherData && <WeatherCard weatherData={weatherData} />}
            </div>
        </div>
    );
};

export default App;
