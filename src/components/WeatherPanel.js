import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';

const WeatherPanel = () => {

    let urlWeather = "";
    let urlForecast = "";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {

        let _ciudad;
        setLoading(true);
        setLocation(loc);

        //weather

        // loc contien la ciudad que buscamos por pantalla
        console.log(loc);
        /*buscar ciudad */
        urlWeather = "https://www.meteosource.com/api/v1/free/find_places?text=" + loc + "&language=en&key=1h7ydkb3nuugcyff05rn5ztrkvkq008qdmcndumg"
        console.log(urlWeather);

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
            console.log("Then asigna ciudad...")
            console.log(weatherData[0]);
            setWeather(weatherData[0]);
            _ciudad = weatherData[0];
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //Forecast

        console.log('Ciudad place_id: ' + _ciudad.place_id);
        urlForecast = "https://www.meteosource.com/api/v1/free/point?place_id=" + _ciudad.place_id + "&sections=daily&timezone=UTC&language=en&units=auto&key=1h7ydkb3nuugcyff05rn5ztrkvkq008qdmcndumg"

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            console.log("Then asigna Pronostico...")
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        
    }


    return(

        <React.Fragment>
    
            <Form
                newLocation = {getLocation}
            />

            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />


        </React.Fragment>

    );

}

export default WeatherPanel;
