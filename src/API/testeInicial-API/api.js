import React from "react";
import { Text, Image, View } from "react-native";

const CityName = ({ city }) => {
  return (
    <Text style={{ fontSize: 20 }}>{city}</Text>
  );
};

const Country = ({ country }) => {
  return (
    <Text style={{ fontSize: 16 }}>{country}</Text>
  );
};

const Temperature = ({ temperature }) => {
  return (
    <Text style={{ fontSize: 16 }}>{temperature} °C</Text>
  );
};

const Pollution = ({ pollution }) => {
  return (
    <Text style={{ fontSize: 16 }}>{pollution}</Text>
  );
};

const WeatherData = ({ weather }) => {
  return (
    <View>
      <CityName city={weather.data.city} />
      <Country country={weather.data.country} />
      <Temperature temperature={weather.data.current.weather.tp} />
      <Pollution pollution={weather.data.current.pollution.aqius}/>
      <Pollution pollution={weather.data.current.pollution.mainus}/>
      <Pollution pollution={weather.data.current.pollution.aqicn}/>
    </View>
  );
};

export default WeatherData;