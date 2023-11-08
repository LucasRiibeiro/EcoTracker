import react from 'react';

const APIKey = '1eadddb4-ebe6-4c71-9eeb-a834f8ae057b';
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