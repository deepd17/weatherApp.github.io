import React, { useEffect, useState } from 'react';
import WeatherCard from './weatherCard';

const Temp = () =>{

    const [searchValue, setSearchValue] = useState("Delhi");
    const [tempInfo, setTempInfo] = useState({});

    // This is called when the button is clicked
    const getWheatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ab566622158b6ce9c4996323e20ff8fe`;

            const res = await fetch(url);
            const data = await res.json();

            const {temp, pressure, humidity} = data.main;
            const {main : wheatherMood } = data.weather[0];
            const { name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;

            const myNewWeatherInfo = {
                temp, 
                pressure,
                humidity,
                wheatherMood,
                name,
                speed,
                country,
                sunset
            };

            setTempInfo(myNewWeatherInfo);

        }catch(error){
            console.log(error);
        }
    }

    // Now by defaukt when the page is reloaded every time
    useEffect(() =>{
        // first hum same funtion call kr denge jo mouse click ppar call krna h
        getWheatherInfo();
    }, []);

    return(
        <>
        <div className="  bg-[#2f2f2f] h-screen flex-row">
        <div className="text-center p-12" id="search">
            <input type="search" autoFocus id="inputCity"  className=" px-4 h-10 w-[500px] mx-4 rounded-lg"  value = {searchValue} onChange={ (e) => setSearchValue(e.target.value)} />
            <button type="submit" className="px-2 h-10 rounded-lg bg-blue-500 text-white w-20" onClick={getWheatherInfo}> Search</button>
        </div>

        <WeatherCard tempInfo = {tempInfo}/>

        </div>
        </>
    )
}

export default Temp