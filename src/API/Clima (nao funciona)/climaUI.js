import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Picker from '@react-native-picker/picker';

export function ClimaUI
    ({
        states,
        cities,
        selectedState,
        selectedCity,
        setSelectedState,
        setSelectedCity,
        fetchCities,
        fetchWeatherDetails,
        weatherData
    }) {
        
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
                    <Picker.Item label="Choose..." value="" />
                    {states && states.map((state) => (
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
                    <Picker.Item label="Choose..." value="" />
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

});
