import react from 'react';

const APIKey = '8801d13a-2b4c-4ec7-b45a-aac79ae899d4';
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