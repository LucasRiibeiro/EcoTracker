import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import PickerComponent from './pickerComponent';
import { styles } from './styles';

import { fetchStates, fetchCities, fetchWeatherDetails, fetchPollutionDetails } from './dataFetcher';

export default function EcoTrackerAPI() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [pollutionData, setPollutionData] = useState(null);

  useEffect(() => {
    fetchStates().then((data) => setStates(data));
  }, []);

  const handleStateChange = (state) => {
    setSelectedState(state);
    fetchCities(state).then((data) => setCities(data));
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    fetchWeatherDetails(city, selectedState).then((data) => {
      setWeatherData(data);
      fetchPollutionDetails(city, selectedState).then((pollutionData) => setPollutionData(pollutionData));

    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>EcoTracker</Text>
        <Text style={styles.italicText}>Selecione o Estado e a Cidade para ver detalhes</Text>
        <PickerComponent
          states={states}
          cities={cities}
          selectedState={selectedState}
          selectedCity={selectedCity}
          onStateChange={handleStateChange}
          onCityChange={handleCityChange}
        />
      </View>
      <View >
        {weatherData && (
          <View>
            <View style={styles.weatherContainer}>
              <Text style={styles.headerClima}> Dados Climáticos</Text>
              <Text style={styles.weatherText}>Temperatura: {weatherData.current.weather.tp} Celsius</Text>
              <Text style={styles.weatherText}>Umidade: {weatherData.current.weather.hu} %</Text>
              <Text style={styles.weatherText}>Velocidade do vento: {weatherData.current.weather.ws} m/s</Text>
            </View>

            {pollutionData && (
              <View style={styles.pollutionContainer}>
                <Text style={styles.headerPoluicao}> Dados de poluição do Ar</Text>
                <Text style={styles.pollutionText}>indice de qualidade do Ar: {pollutionData.current.pollution.aqius}</Text>
                <Text style={styles.pollutionText}>Categoria de poluição: {pollutionData.current.pollution.mainus}</Text>
           
              </View>
            )}
          </View>
        )}
      </View>

    </View>
  );
};

