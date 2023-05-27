import React, { useState, useEffect } from 'react';
import axios from "axios";
import {WEATHER_API_URL, WEATHER_API_KEY} from "../Secret"

const TodayInform = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState({});

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds < 59) {
          setSeconds((prevSeconds) => prevSeconds + 1);
        } else if (minutes < 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          setSeconds(0);
        } else {
          setHours((prevHours) => prevHours + 1);
          setMinutes(0);
          setSeconds(0);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds, minutes, hours]);
  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

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
  return (
    <div key={index} className="flex justify-center align-middle">
      <span className='text-center text-slate-400 sm:text-base md:text-2xl mx-3'>Seoul, {temp.temp}°C</span>
      <span className='text-center text-slate-400 sm:text-base md:text-2xl mx-3'>{e.description}</span>
      <img
        className='object-cover h-12 w-12'
        src={`https://openweathermap.org/img/wn/${e.icon}@2x.png`}
        alt="날씨 아이콘"
      />
    </div>
  );
});


return (
  <div className="flex flex-col items-center justify-center mt-5 p-3">
    {/* 타이머 */}
    <div className="flex items-center justify-center text-slate-500 rounded-full text-2xl md:text-7xl sm:text-5xl mb-4">
      <span className='mr-3'> {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
      <button
          className="bg-blue-500 text-white m-1 text-sm rounded-lg px-2 md:px-8 py-2 md:py-4 text-center col-span-2 md:col-span-1 hover:bg-blue-700"
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="bg-red-500 hover:bg-red-400 text-white m-1 text-sm rounded-lg px-2 md:px-8 py-2 md:py-4 text-center col-span-2 md:col-span-1"
          onClick={handleStop}
          disabled={!isRunning}
        >
          Finish
        </button>
        <button
          className="bg-gray-500 text-white m-1 text-sm rounded-lg px-2 md:px-8 py-2 md:py-4 text-center col-span-2 md:col-span-1 hover:bg-gray-700"
          onClick={handleReset}
        >
          Reset
        </button>
    </div>

    {/* 날씨 정보 */}
    <div className="mt-1">
      {isWeather}
    </div>
  </div>
  );
};

export default TodayInform;