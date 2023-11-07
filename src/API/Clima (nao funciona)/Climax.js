import React from 'react';
import { View, StyleSheet } from 'react-native';
import {ClimaData}  from './climaData';
import {ClimaUI} from './climaUI';

export function Climax() {
  const {
    states,
    cities,
    selectedState,
    selectedCity,
    setSelectedState,
    setSelectedCity,
    fetchCities,
    fetchWeatherDetails,
    weatherData,
  } = ClimaData();

  return (
    <View style={styles.container}>
      <ClimaUI
        states={states}
        cities={cities}
        selectedState={selectedState}
        selectedCity={selectedCity}
        setSelectedState={setSelectedState}
        setSelectedCity={setSelectedCity}
        fetchCities={fetchCities}
        fetchWeatherDetails={fetchWeatherDetails}
        weatherData={weatherData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
