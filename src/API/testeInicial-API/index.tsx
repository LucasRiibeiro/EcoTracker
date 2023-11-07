import WeatherData from "./api";
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function AirVisual() {
  const [weather, setWeather] = useState(null);

  const fetchData = async () => {
    await fetch(`http://api.airvisual.com/v2/nearest_city?key=1eadddb4-ebe6-4c71-9eeb-a834f8ae057b`)
      .then((res) => res.json())
      .then((res) => setWeather(res));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (weather) {
    return (
      <View>
        <WeatherData weather={weather} />
      </View>
    );
  } else {
    return (
      <View>
        <Text>Carregando dados...</Text>
      </View>
    );
  }
};



