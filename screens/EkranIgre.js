import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Animated  } from 'react-native';
import {Ionicons,AntDesign,Feather, FontAwesome } from '@expo/vector-icons';
const EkranIgre = (props) => {
  const [userMove, setUserMove] = useState(null);
  const [computerMove, setComputerMove] = useState(null);
  const [result, setResult] = useState(null);
  let wins = props.wins;
  let losses = props.losses;
  let draws = props.draws;

  const handleMove = move => {
    setUserMove(move);
    const computerMove = Math.floor(Math.random() * 3) + 1;
    setComputerMove(computerMove);
    props.promijeniSve(move,computerMove,result,wins,losses,draws);
    props.pocetak(3);
  };

  return(
    <View style={styles.container}>
      <Text style={styles.label}>Odaberi svoj potez:</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity title="Kamen" onPress={() => handleMove(1)}>
      <FontAwesome name="hand-rock-o" style={styles.odabir} />
      </TouchableOpacity>
      <TouchableOpacity title="Kamen" onPress={() => handleMove(3)}>
      <FontAwesome name="hand-scissors-o" style={styles.odabir} />
      </TouchableOpacity>
      <TouchableOpacity title="Papir" onPress={() => handleMove(2)}>
      <FontAwesome name="hand-paper-o" style={styles.odabir} />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 48,
    color:'white',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  odabir:{
    fontSize:76,
    color:'white',
    margin:'5%'
  },
});

export default EkranIgre;