import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

export default function PickerComponent({ states, cities, selectedState, selectedCity, onStateChange, onCityChange }) {
  const transformToUppercase = (text) => text.toUpperCase();

  return (
    <View>
      <Picker
        selectedValue={selectedState}
        onValueChange={(itemValue) => onStateChange(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Escolha..." value="" />
        {states && states.length > 0 ? (
          states.map((state) => (
            <Picker.Item
              key={state.state}
              label={transformToUppercase(state.state)}
              value={transformToUppercase(state.state)}
            />
          ))
        ) : (
          <Picker.Item label="Nenhum dado disponível" value="" />
        )}
      </Picker>

      <Picker
        selectedValue={selectedCity}
        onValueChange={(itemValue) => onCityChange(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Escolha..." value="" />
        {cities && cities.length > 0 ? (
          cities.map((city) => (
            <Picker.Item
              key={city.city}
              label={transformToUppercase(city.city)}
              value={transformToUppercase(city.city)}
            />
          ))
        ) : (
          <Picker.Item label="Nenhum dado disponível" value="" />
        )}
      </Picker>
    </View>
  );
}
