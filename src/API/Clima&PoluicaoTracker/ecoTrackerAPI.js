import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import PickerComponent from './pickerComponent';
import { styles } from './styles';
import {
  fetchStates,
  fetchCities,
  fetchWeatherDetails,
  fetchPollutionDetails,
} from './dataFetcher';

export default function EcoTrackerAPI() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [pollutionData, setPollutionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fieldsDisabled, setFieldsDisabled] = useState(false);
  const [statesLoaded, setStatesLoaded] = useState(false);
  const [updatePickerKey, setUpdatePickerKey] = useState(0); // Chave de atualização do componente Picker

  const handleQuery = async () => {
    setIsLoading(true);
    setWeatherData(null);
    setPollutionData(null);
    setFieldsDisabled(true);
    setUpdatePickerKey(updatePickerKey + 1); // Incrementa a chave para forçar a re-renderização do PickerComponent

    // Bloqueia os campos por 10 segundos
    setTimeout(() => {
      setFieldsDisabled(false);
    }, 10000);

    if (!selectedCity || !selectedState) {
      console.error("Selecione um estado e uma cidade");
      setIsLoading(false);
      return;
    }

    try {
      const weather = await fetchWeatherDetails(selectedCity, selectedState);
      const pollution = await fetchPollutionDetails(selectedCity, selectedState);

      setWeatherData(weather);
      setPollutionData(pollution);
    } catch (error) {
      console.error("Erro ao buscar dados meteorológicos e de poluição:", error);
      setWeatherData({ error: "Dados meteorológicos não disponíveis" });
      setPollutionData({ error: "Dados de poluição não disponíveis" });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchStates()
      .then((data) => {
        setStates(data);
        setStatesLoaded(true);
        setUpdatePickerKey(updatePickerKey + 1); // Incrementa a chave para forçar a re-renderização do PickerComponent
      })
      .catch((error) => console.error("Erro ao buscar estados:", error))
      .finally(() => setIsLoading(false));
  }, []);

  const handleStateChange = (state) => {
    setSelectedState(state);
    setWeatherData(null);
    setPollutionData(null);
    setFieldsDisabled(false);
    setCities([]);

    fetchCities(state)
      .then((data) => {
        setCities(data || []);
        setSelectedCity('');
        setUpdatePickerKey(updatePickerKey + 1); // Incrementa a chave para forçar a re-renderização do PickerComponent
      })
      .catch((error) => console.error("Erro ao buscar cidades:", error));
  }

  const handleCityChange = async (city) => {
    setSelectedCity(city);
    setWeatherData(null);
    setPollutionData(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>EcoTracker</Text>
        <Text style={styles.italicText}>Selecione o Estado e a Cidade para ver detalhes</Text>
        <PickerComponent
          key={updatePickerKey} // Use a chave para forçar a re-renderização do PickerComponent
          states={states}
          cities={cities}
          selectedState={selectedState}
          selectedCity={selectedCity}
          onStateChange={handleStateChange}
          onCityChange={handleCityChange}
          disabled={fieldsDisabled}
        />
        <Button title="Consultar" onPress={handleQuery} />
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            {weatherData && (
              <View>
                {weatherData.error ? (
                  <Text style={styles.errorText}>{weatherData.error}</Text>
                ) : (
                  <View style={styles.weatherContainer}>
                    <Text style={styles.headerClima}>Dados Climáticos</Text>
                    <Text style={styles.weatherText}>Temperatura: {weatherData.current?.weather?.tp} Celsius</Text>
                    <Text style={styles.weatherText}>Umidade: {weatherData.current?.weather?.hu} %</Text>
                    <Text style={styles.weatherText}>Velocidade do vento: {weatherData.current?.weather?.ws} m/s</Text>
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
                    <Text style={styles.headerPoluicao}>Dados de poluição do Ar</Text>
                    <Text style={styles.pollutionText}>Índice de qualidade do Ar: {pollutionData.current?.pollution?.aqius}</Text>
                    <Text style={styles.pollutionText}>Categoria de poluição: {pollutionData.current?.pollution?.mainus}</Text>
                  </View>
                )}
              </View>
            )}
          </>
        )}
      </View>
    </View>
  );
}
