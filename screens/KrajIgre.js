import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const KrajIgre = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        You chose: {getMoveName(props.userMove)}
        {'\n'}
        Computer chose: {getMoveName(props.computerMove)}
      </Text>
      <Text style={styles.label}>{props.result}</Text>
      <Text style={styles.label}>
        Wins: {props.wins} Losses: {props.losses} Draws: {props.draws}
      </Text>
      <Button title="Play again" onPress={() => {props.pocetak(2)}} />
    </View>
  );
};

const getMoveName = move => {
  if (move === 1) {
    return 'Rock';
  } else if (move === 2) {
    return 'Paper';
  } else if (move === 3) {
    return 'Scissors';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default KrajIgre;