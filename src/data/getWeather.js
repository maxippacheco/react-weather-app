import axios from "axios";

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '<your apikey>';

export const getWeather = async(cityname) => {

    try {
        
        const {data} = await axios.get(baseUrl + `?q=${cityname}&appid=${apiKey}&units=metric`);
     
        return data;
    } catch (error) {
        throw new Error(error);
    }

}
