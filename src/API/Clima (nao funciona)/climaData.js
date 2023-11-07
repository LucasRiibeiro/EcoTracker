import React, { useState, useEffect } from 'react';

const APIKey = '1eadddb4-ebe6-4c71-9eeb-a834f8ae057b';
const APIUrl = 'https://api.airvisual.com/v2/';

export function ClimaData() {

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    console.log('States:', states);
    console.log('Cities:', cities);
    const fetchStates = async () => {
      try {
        const response = await fetch(`${APIUrl}states?country=Brazil&key=${APIKey}`);
        const data = await response.json();
        setStates(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStates();
  }, []);

  const fetchCities = async (state) => {
    try {
      const response = await fetch(`${APIUrl}cities?state=${state}&country=India&key=${APIKey}`);
      const data = await response.json();
      setCities(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWeatherDetails = async (city, state) => {
    try {
      const response = await fetch(`${APIUrl}city?city=${city}&state=${state}&country=India&key=${APIKey}`);
      const data = await response.json();
      setWeatherData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    states,
    cities,
    selectedState,
    selectedCity,
    weatherData,
    setSelectedState,
    setSelectedCity,
    fetchCities,
    fetchWeatherDetails,
  };
};