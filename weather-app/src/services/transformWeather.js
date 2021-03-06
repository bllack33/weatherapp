import {
    SUN,
} from './../constants/weathers';

 const getWeatherState = weather_data =>{
    return SUN;
}

const transformWeather = weather_data =>{
    const{humidity, temp} = weather_data.main;
    const {speed} = weather_data.main;
    const weatherState = getWeatherState(weather_data);

    const data ={
        humidity,
        temperature:temp,
        weatherState,
        wind:`${speed} m/s`,
    }
    return data;
}

export default transformWeather;