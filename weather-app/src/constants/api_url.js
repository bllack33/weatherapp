
const location = "Medellin,CO";
const api_key ='b8bc46d398036e8b11a7fd1b53e3d4f7';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';

export const api_weather= `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;