import React,{ Component }  from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import {
    SUN
} from './../../constants/weathers';

import { api_weather } from './../../constants/api_url';


const data= {
    temperature: 5 ,
    weatherState:SUN,
    humidity:10,
    wind:'20 m/s'
};

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state={
            city:'Colombia',
            data:data,
        };
    }
    handleUpdateClick = () =>{
        fetch(api_weather).then(resolve=>{
            console.log(resolve);
            return resolve.json();
        }).then(data=>{
            const newWeather = transformWeather(data);
            console.log(data);
            this.setState({
                data: newWeather
            });
            
        });   
    }
    
    render(){
        const {city,data}= this.state;
        return(
        <div className="weatherLocationConst">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
         </div>
        );
    }
}


export default WeatherLocation;