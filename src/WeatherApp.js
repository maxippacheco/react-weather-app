import React, { useEffect, useState } from 'react'
import { getWeather } from './data/getWeather';

export const WeatherApp = () => {
  
  const [weatherdata, setWeatherdata] = useState(null)
  const [city, setCity] = useState('London');

  const getData = async() => {

      try {
        const data = await getWeather(city);
        setWeatherdata(data);
  
      } catch (error) {
        console.log(error);
      }


  }
  
  useEffect(() => {
    getData()

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    const city_confirm = document.querySelector('#city').value;

    if (city_confirm.length > 1) {
      getData()
    }else{
      alert(1234)
    }

  }

  return (
    <div className='app__content'>
      <h1 className='h1'>Weather app</h1>


      <form 
        onSubmit={handleSubmit}
        className='form'  
      >
        <input 
          type='text'
          value={city}
          id='city'
          onChange={e => setCity(e.target.value)}

        />

        <input 
          type='submit'
          value='submit'
        />
      </form>


        {weatherdata !== null ?
        
        <div className='card'>
            
            <h2 className='weather__h2_title'>The weather today</h2>

            <h3>{ weatherdata.weather[0].description }</h3>

            <img src = {`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt='icon' />
            

            <div className='weather__temp'> 
                <h4>Temperature: { Math.round(weatherdata.main.temp)}°</h4>
            </div>

            <div className='weather__temp_min_and_max'>
              <h5>
                Min: { Math.round(weatherdata.main.temp_min)}°
              </h5>

              <h5>
                Max: { Math.round(weatherdata.main.temp_max)}°
              </h5>
            </div>
            
            {/* <h5 className='weather__humidity'>Humidity: {weatherdata.main.humidity}</h5>   */}
        
        </div>
        
        
        : null}

    </div>

  )
}
