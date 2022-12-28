import React, {useState, useEffect} from 'react';

const WeatherCard = ( {tempInfo}) =>{

    const [weatherState, setWeatherState] = useState("");

    const {
        temp, 
        pressure,
        humidity,
        wheatherMood,
        name,
        speed,
        country,
        sunset
    } = tempInfo;

    let sec = sunset;
    // sec ko mili sec m convert kr diya .. ise ab date k andaer date ban gayi 
    let date = new Date( sec * 1000);

    let time = `${date.getHours()}:${date.getMinutes()}`;

    // setting the weather icon mood
    useEffect(() =>{
        if(wheatherMood){
            switch(wheatherMood){
                case "Clouds" : setWeatherState("wi-cloudy");
                break;
                case "Haze" : setWeatherState("wi-day-haze");
                break;
                case "Mist" : setWeatherState("wi-dust");
                break;
                case "Rain" : setWeatherState("wi-rain");
                break;
                case "Thunderstorm" : setWeatherState("wi-thunderstorm");
                break;
                case "Clear" : setWeatherState("wi-day-sunny");
                break;
                case "Snow" : setWeatherState("wi-snow");
                break;
                default: setWeatherState("wi-day-cloudy");
                break;
            }
        }
    }, [wheatherMood]);


    return(
        <>
        <div className=" mx-[400px] h-[400px] bg-white rounded-xl">
            <div className="text-[100px] text-center">
                <i className={`wi ${weatherState}`}></i>
            </div>

            <div id="wheatherinfo" className="text-white bg-black h-[140px] text-[35px] flex">
                <div id="whether" className="flex flex-row w-2/3">
                    <div className="p-10"> {temp} &deg; </div>
                    <div className="text-[15px] p-8 flex flex-col">
                        <p className ="text-[30px] uppercase"> {wheatherMood}</p>
                        <p> {name}, {country}</p>
                    </div>
                </div>
                <div className=" text-[30px] bg-blue-500 p-6 w-1/3"> 
                    { new Date().toLocaleString() }
                </div>
            </div>

            <div className="flex">
                <div className="w-1/4 flex text-center p-5">
                    <div> <i className={"wi wi-sunset text-[30px] p-4"}></i>
                    </div>
                    <div className="p-2">
                        {time} PM<br/>
                        Sunset
                    </div>
                </div>
                <div className="w-1/4 flex text-center p-5">
                <div> <i className={"wi wi-humidity text-[30px] p-4"}></i>
                    </div>
                    <div className="p-2">
                        {humidity} <br/>
                        humidity
                    </div>
                </div>
                <div className="w-1/4 flex text-center p-5">
                <div> <i className={"wi wi-rain text-[30px] p-4"}></i>
                    </div>
                    <div className="p-2">
                        {pressure}<br/>
                        Pressure
                    </div>
                </div>
                <div className="w-1/4 flex text-center p-5">
                <div> <i className={"wi wi-strong-wind text-[30px] p-4"}></i>
                    </div>
                    <div className="p-2">
                        {speed}<br/>
                        Speed
                    </div>
                </div>
            </div>

        </div>

        </>
    )
}

export default WeatherCard;