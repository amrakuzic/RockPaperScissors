import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import PocetniEkran from './screens/PocetniEkran';
import KrajIgre from './screens/KrajIgre';
import EkranIgre from './screens/EkranIgre';

export default function App() {
  const [screen, setCurrentScreen] = useState(1);
  const [userMove, setUserMove] = useState(null);
  const [computerMove, setComputerMove] = useState(null);
  const [result, setResult] = useState(null);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);

  const promijeniEkran = (broj) => {
    setCurrentScreen(broj);
    }
  const promijeniSveVarijable = (userMove,computerMove,result,wins,losses,draws) => {
    setUserMove(userMove);
    setComputerMove(computerMove);
    setResult(result);
    setWins(wins);
    setLosses(losses);
    setDraws(draws);
    }
  useEffect(() => {
    if (userMove && computerMove) {
      determineResult(userMove, computerMove);
    }
  }, [userMove, computerMove]);

  const determineResult = (userMove, computerMove) => {
    if (userMove === computerMove) {
      setResult("It's a draw!");
      setDraws(draws + 1);
    } else if (userMove === 1 && computerMove === 3 || userMove === 2 && computerMove === 1 || userMove === 3 && computerMove === 2) {
      setResult("You won!");
      setWins(wins + 1);
    } else {
      setResult("You lost!");
      setLosses(losses + 1);
    }


  };
  let sadrzaj = <PocetniEkran pocetak={promijeniEkran}/>
  if(screen==2){
    sadrzaj = <EkranIgre 
    pocetak={promijeniEkran}
    promijeniSve={promijeniSveVarijable}
    setUserMove={setUserMove}
    setComputerMove={setComputerMove}
    wins={wins}
    setWins={setWins}
    losses={losses}
    setLosses={setLosses}
    draws={draws}
    setDraws={setDraws}/>
  }
  else if(screen==3){
    sadrzaj = <KrajIgre
    pocetak={promijeniEkran}
    promijeniSve={promijeniSveVarijable}
    userMove={userMove}
    computerMove={computerMove}
    result={result}
    wins={wins}
    setWins={setWins}
    losses={losses}
    setLosses={setLosses}
    draws={draws}
    setDraws={setDraws}/>
  }
  return (
    <View style={styles.ekran}>
      {sadrzaj}
      {/** 
       * 
       *       {screen === 'EkranIgre' && (
        <EkranIgre
        setCurrentScreen={setScreen}
          setUserMove={setUserMove}
          setComputerMove={setComputerMove}
          wins={wins}
          setWins={setWins}
          losses={losses}
          setLosses={setLosses}
          draws={draws}
          setDraws={setDraws}
        />
      )}
      {screen === 'KrajIgre' && (
        <KrajIgre
        setCurrentScreen={setScreen}
          userMove={userMove}
          computerMove={computerMove}
          result={result}
          wins={wins}
          setWins={setWins}
          losses={losses}
          setLosses={setLosses}
          draws={draws}
          setDraws={setDraws}
        />
      )}
      */}

    </View>
  );
}

const styles = StyleSheet.create({
  ekran: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3f3f3f',
  },
});