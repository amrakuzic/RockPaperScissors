import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import KrajIgre from './KrajIgre';

const EkranIgre = (props) => {
  const [userMove, setUserMove] = useState(null);
  const [computerMove, setComputerMove] = useState(null);
  const [result, setResult] = useState(null);
  //const [wins, setWins] = useState(0);
  //const [losses, setLosses] = useState(0);
  //const [draws, setDraws] = useState(0);
  let wins = props.wins;
  let losses = props.losses;
  let draws = props.draws;
  const handleMove = move => {
    setUserMove(move);
    // Choose a random move for the computer
    const computerMove = Math.floor(Math.random() * 3) + 1;
    setComputerMove(computerMove);
    // Determine the result of the game
    /*
    if (move === computerMove) {
      setResult("It's a draw!");
      setDraws(draws + 1);
    } else if (move === 1 && computerMove === 3 || move === 2 && computerMove === 1 || move === 3 && computerMove === 2) {
      setResult("You won!");
      //setWins(wins + 1);
      wins = props.wins;
      //console.log("Dobio si")
    } else {
      setResult("You lost!");
      losses = props.losses
      setLosses(losses + 1);
    }
    */
    props.promijeniSve(move,computerMove,result,wins,losses,draws);
    props.pocetak(3);
  };

  return(
    <View style={styles.container}>
      <Text style={styles.label}>Choose your move:</Text>
      <View style={styles.buttonContainer}>
        <Button title="Rock" onPress={() => handleMove(1)} />
        <Button title="Paper" onPress={() => handleMove(2)} />
        <Button title="Scissors" onPress={() => handleMove(3)} />
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
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default EkranIgre;