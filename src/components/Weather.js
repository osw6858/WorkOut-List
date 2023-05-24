import axios from "axios";
import {useEffect, useState} from "react";
import {WEATHER_API_URL, WEATHER_API_KEY} from "../Secret"

const Weather = () => {
    const [weather, setWeather] = useState([]);
    const [temp, setTemp] = useState({});

    useEffect(() => {
        async function getWeather() {
            try {
                const res = await axios.get(WEATHER_API_URL + WEATHER_API_KEY)
                console.log("res", res);
                let weather = res.data.weather;
                let temp = res.data.main;
                setWeather(weather);
                setTemp(temp);
            } catch (error) {
                console.log(error);
            }
        }
        getWeather()
    }, [])

    const isWeather = weather.map((e, index) => {
        return <div key={index} className="flex justify-center align-middle ">
            <h2 className='text-center  dark:text-slate-400 text-[20px] py-3 mx-3'>{e.description}</h2>
            <img
                className='object-cover h-12 w-12'
                src={` https://openweathermap.org/img/wn/${e.icon}@2x.png`}
                alt="날씨 아이콘"/>
        </div>
    })
    return (
        <div>
            <h1 className='text-center dark:text-slate-400 text-[50px] py-3'>{temp.temp}°C</h1>
            <h2 className='text-center  dark:text-slate-400 text-[20px] py-3'>체감기온 {temp.feels_like}°C</h2>
            {isWeather}</div>
    )
}

export default Weather;