import react from 'react';

const APIKey = '69781816-19f9-45b7-aebd-b023b3cfd7db';
const APIUrl = 'https://api.airvisual.com/v2/';

export const fetchStates = async () => {
    try {
      const response = await fetch(`${APIUrl}states?country=Brazil&key=${APIKey}`);
      const data = await response.json();
  
      return data.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  export const fetchCities = async (state) => {
    try {
      const response = await fetch(`${APIUrl}cities?state=${state}&country=Brazil&key=${APIKey}`);
      const data = await response.json();
  
      return data.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  export const fetchWeatherDetails = async (city, state) => {
    try {
      const response = await fetch(`${APIUrl}city?city=${city}&state=${state}&country=Brazil&key=${APIKey}`);
      const data = await response.json();
  
      return data.data;
    } catch (error) {
      console.error(error);
      return null;
    }

  };

    export const fetchPollutionDetails = async (city, state) => {
      try {
        const response = await fetch(`${APIUrl}city?city=${city}&state=${state}&country=Brazil&key=${APIKey}`);
        const data = await response.json();
    
        return data.data;
      } catch (error) {
        alert(error.message)
        return null;
      }  
  };