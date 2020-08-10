import React,{ Component }  from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';

import { api_weather } from './../../constants/api_url';

class WeatherLocation extends Component{

    constructor(props){
        super(props);
        const {city} = props;
        this.state={
            city,
            data: null,
        };
    }

    componentDidMount(){
        this.handleUpdateClick();
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

            { data ? 
            <WeatherData data={data}></WeatherData>: 
            <CircularProgress />
            }
         </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;