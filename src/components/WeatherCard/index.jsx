// libraries
import React from 'react';

const WeatherCard = ({ weatherData }) => {
    const currentTime = new Date().toLocaleString();
    const data = weatherData.current;

    return (
        <div className="weathercard__container">
            <div className="weathercard__date-time">{currentTime}</div>
            <div className="weathercard__city">{weatherData.location.name}</div>
            <div className="weathercard__temperature">{data.temperature}&#xb0;С</div>

            <div className="weathercard__info">

                <div className="info__left">
                    <div className="info__left-humidity">Humidity: {data.humidity} %</div>
                    <div className="info__left-pressure">Pressure:&nbsp; {data.pressure} hPa</div>
                    <div className="info__left-uvindex">UV_index: {data.uv_index}</div>
                </div>

                <div className="info__center-image">
                    <img src={data.weather_icons} alt="weather" />
                </div>

                <div className="info__right">
                    <div className="info__right-descriptions">Feels like: {data.feelslike} &#xb0;С</div>
                    <div className="info__right-visibility">Visibility:&nbsp; {data.visibility} km</div>
                    <div className="info__right-windspeed">Wind:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {data.wind_speed} km/h</div>
                </div>
            </div>
            <div className="info__right-descriptions">Sky: {data.weather_descriptions}</div>
        </div>
    );
};

export default WeatherCard;
