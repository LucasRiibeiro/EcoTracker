import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    headerClima: {
      alignSelf: 'center',
      color: 'green',
      fontSize: 20,
    },
    headerPoluicao: {
      alignSelf: 'center',
      color: 'orange',
      fontSize: 20,
    },
    container: {
      flex: 1,
      marginTop: 25,
      justifyContent: 'center',
      padding: 10,
      backgroundColor: 'gray',
    },
    inputContainer: {
      alignItems: 'center',
    },
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    italicText: {
      fontStyle: 'italic',
      marginVertical: 15,
    },
    picker: {
      width: 200,
      marginVertical: 10,
    },
    weatherContainer: {
      marginTop: 20,
    },
    pollutionContainer: {
      marginTop: 20,
    },
    weatherText: {
      fontSize: 13,
      marginVertical: 5,
      alignSelf: 'center'
    },
    pollutionText: {
      fontSize: 13,
      marginVertical: 5,
      alignSelf: 'center'
    },
  });
  