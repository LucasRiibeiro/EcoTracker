import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const APIKey = '1eadddb4-ebe6-4c71-9eeb-a834f8ae057b';
const APIUrl = 'https://api.airvisual.com/v2/';

export default function Clima() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
   

    const fetchStates = async () => {
      try {
        const response = await fetch(`${APIUrl}states?country=Brazil&key=${APIKey}`);
        const data = await response.json();

        console.log(states)

        setStates(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchStates();
  }, []);

  const fetchCities = async (states) => {
    try {
      const response = await fetch(`${APIUrl}cities?state=${states}&country=Brazil&key=${APIKey}`);
      const data = await response.json();

      setCities(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWeatherDetails = async (city, state) => {
    try {
      const response = await fetch(`${APIUrl}city?city=${city}&state=${state}&country=Brazil&key=${APIKey}`);
      const data = await response.json();
      setWeatherData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>EcoTracker</Text>
        <Text style={styles.italicText}>Selecione o Estado e a Cidade para ver detalhes</Text>
        <Picker
          selectedValue={selectedState}
          onValueChange={(itemValue) => {
            setSelectedState(itemValue);
            fetchCities(itemValue);
          }}
          style={styles.picker}
        >
          <Picker.Item label="Escolha..." value="" />
          { states && states.map((state) => (
            <Picker.Item key={state.state} label={state.state} value={state.state} />
          ))}
        </Picker>
        <Picker
          selectedValue={selectedCity}
          onValueChange={(itemValue) => {
            setSelectedCity(itemValue);
            fetchWeatherDetails(itemValue, selectedState);
          }}
          style={styles.picker}
        >
          <Picker.Item label="Escolha..." value="" />
          {cities && cities.map((city) => (
            <Picker.Item key={city.city} label={city.city} value={city.city} />
          ))}
        </Picker>
      </View>

      {weatherData && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>Localização: {weatherData.location.coordinates[0]}, {weatherData.location.coordinates[1]}</Text>
          <Text style={styles.weatherText}>Temperatura: {weatherData.current.weather.tp} Celsius</Text>
          <Text style={styles.weatherText}>Pressão: {weatherData.current.weather.pr} hPa</Text>
          <Text style={styles.weatherText}>Humidade: {weatherData.current.weather.hu} %</Text>
          <Text style={styles.weatherText}>Velocidade do vento: {weatherData.current.weather.ws} m/s</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  inputContainer: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
    marginVertical: 10,
  },
  picker: {
    width: 200,
    marginVertical: 10,
  },
  weatherContainer: {
    marginTop: 20,
  },
  weatherText: {
    fontSize: 18,
    marginVertical: 5,
  },
});