import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';



const GumbPocetakIgre = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {props.promijeni(2)}}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffd700',
    borderRadius: 100,
    width: 200,
    height: 200,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#AD0000',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default GumbPocetakIgre;