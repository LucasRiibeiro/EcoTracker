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

  const handleCityChange = async (city) => {
    setSelectedCity(city);
    setWeatherData(null);
    setPollutionData(null);
  
    try {
      if (!city || !selectedState) {
        throw new Error("Selecione um estado e uma cidade");
      }
  
      const weather = await fetchWeatherDetails(city, selectedState);
      const pollution = await fetchPollutionDetails(city, selectedState);
  
      setWeatherData(weather);
      setPollutionData(pollution);
    } catch (error) {
      console.error("Erro ao buscar dados meteorológicos e de poluição:", error);
  
      // Trate o erro definindo mensagens informativas
      setWeatherData({ error: "Dados meteorológicos não disponíveis" });
      setPollutionData({ error: "Dados de poluição não disponíveis" });
    }
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
    {weatherData.error ? (
      <Text style={styles.errorText}>{weatherData.error}</Text>
    ) : (
      <View style={styles.weatherContainer}>
                   <View style={styles.weatherContainer}>
              <Text style={styles.headerClima}> Dados Climáticos</Text>
              <Text style={styles.weatherText}>Temperatura: {weatherData.current.weather.tp} Celsius</Text>
              <Text style={styles.weatherText}>Umidade: {weatherData.current.weather.hu} %</Text>
              <Text style={styles.weatherText}>Velocidade do vento: {weatherData.current.weather.ws} m/s</Text>
            </View>

      </View>
    )}
  </View>
)}

{pollutionData && (
  <View>
    {pollutionData.error ? (
      <Text style={styles.errorText}>{pollutionData.error}</Text>
    ) : (
      <View style={styles.pollutionContainer}>
                    <View style={styles.pollutionContainer}>
                <Text style={styles.headerPoluicao}> Dados de poluição do Ar</Text>
                <Text style={styles.pollutionText}>indice de qualidade do Ar: {pollutionData.current.pollution.aqius}</Text>
                <Text style={styles.pollutionText}>Categoria de poluição: {pollutionData.current.pollution.mainus}</Text>
           
              </View>
      </View>
    )}
  </View>
)}
      </View>

    </View>
  );
};

