import React from 'react';
import Spinner from './Spinner';

const Card = ({loadingData, showData, weather, forecast}) => {

    let today = new Date(); 
    let day = today.getDate();
    let month = today.getMonth() +1;
    let year = today.getFullYear();

    let date = year + "-" + month + "-" + day;

    // let iconUrl = "";

    if(loadingData){
        return <Spinner />;
    }
    //  if(showData){
    //     if (forecast.daily.data[0]  == "Sunny") {
    //          iconUrl = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    //     }
    //     if (forecast.daily.data[0]  == "mostly_cloudy") {
    //          iconUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
    //     }
    //     if (forecast.daily.data[0]  == "Partly sunny") {
    //          iconUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
    //     }
    //     if (forecast.daily.data[0]   == "Cloudy") {
    //          iconUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
    //     }
    //     if (forecast.daily.data[0]   == "Rain") {
    //          iconUrl = "https://cdn-icons-png.flaticon.com/512/1146/1146858.png";
    //     }
    //     if (forecast.daily.data[0]  == "Light rain ") {
    //          iconUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163657.png";
    //     }
    //     if (forecast.daily.data[0]   == "Snow showers") {
    //          iconUrl = "https://cdn-icons.flaticon.com/png/512/2315/premium/2315377.png?token=exp=1660258099~hmac=8231b957e07cac3c0cf6a65d3ce384fd";
    //     }
    //  }

    return (
        <div className="mt-5">
            {
                showData === true ? (

                    <div className="container">
                        <div className="card mb-3 mx-auto">
                            <div className="back row g-0">
                                <div className="col-md-5">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <img src="https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-bag" alt="..."></img>
                                    <h1 className="card-temp">{forecast.daily.data[0].all_day.temperature}°C</h1> 
                                    <p className="card-desc">{forecast.daily.data[0].weather}</p>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body text-start mt-2">
                                        <h5 className="card-text">Temperatura Maxima: {forecast.daily.data[0].all_day.temperature_max}°C</h5>
                                        <h5 className="card-text">Temperatura Minima: {forecast.daily.data[0].all_day.temperature_min}°C</h5>
                                        <h5 className="card-text">Velocidad del Viento: {forecast.daily.data[0].all_day.wind.speed}m/s</h5>
                                    </div>
                                    <hr/>
                                    <div className="l1 row mt-4 aling-items-star">
                                        <div className="col">
                                           <h6 className="date-day">{forecast.daily.data[1].day}</h6>
                                           <h6 className="temp-day">{forecast.daily.data[1].all_day.temperature}°C</h6>  
                                        </div>
                                        <div className="col">
                                           <h6 className="date-day">{forecast.daily.data[2].day}</h6>
                                           <h6 className="temp-day">{forecast.daily.data[2].all_day.temperature}°C</h6>  
                                        </div>
                                        <div className="col">
                                           <h6 className="date-day">{forecast.daily.data[3].day}</h6>
                                           <h6 className="temp-day">{forecast.daily.data[3].all_day.temperature}°C</h6>  
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="l2 row mt-4 aling-items-star">
                                        <div className="col">
                                           <h6 className="date-day">{forecast.daily.data[4].day}</h6>
                                           <h6 className="temp-day">{forecast.daily.data[4].all_day.temperature}°C</h6>  
                                        </div>
                                        <div className="col">
                                           <h6 className="date-day">{forecast.daily.data[5].day}</h6>
                                           <h6 className="temp-day">{forecast.daily.data[5].all_day.temperature}°C</h6>  
                                        </div>
                                        <div className="col">
                                           <h6 className="date-day">{forecast.daily.data[6].day}</h6>
                                           <h6 className="temp-day">{forecast.daily.data[6].all_day.temperature}°C</h6>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                ):(
                    <h2 className="text-light">Sin datos</h2>
                )
            }

        </div>

    );
}

export default Card;
