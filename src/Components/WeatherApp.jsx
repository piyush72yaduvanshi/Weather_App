import React, { useState } from 'react'
import SearchBox from "./SearchBox"
import InfoBox from './InfoBox'
function WeatherApp() {
    let [weatherInfo,setWeatherInfo] = useState({
        name: "Lucknow",
        temp: 25,
        temp_max: 25,
        temp_min: 25,
        humidity: 25,
        feels_like: 25,
        pressure: 25,
        weather: "Clouds",
    });

    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <>
        <div style={{textAlign:"center" }}>
        <SearchBox updateInfo ={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
        </>
    )
}

export default WeatherApp
