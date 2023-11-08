import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

export default function PickerComponent({ states, cities, selectedState, selectedCity, onStateChange, onCityChange }) {
  return (
    <View>
      <Picker
        selectedValue={selectedState}
        onValueChange={(itemValue) => onStateChange(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Escolha..." value="" />
        {states && states.map((state) => (
          <Picker.Item key={state.state} label={state.state} value={state.state} />
        ))}
      </Picker>
      <Picker
        selectedValue={selectedCity}
        onValueChange={(itemValue) => onCityChange(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Escolha..." value="" />
        {cities && cities.map((city) => (
          <Picker.Item key={city.city} label={city.city} value={city.city} />
        ))}
      </Picker>
    </View>
  );
};