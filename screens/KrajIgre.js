import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MojGumb from '../components/MojGumb';
import {Ionicons,AntDesign,Feather  } from '@expo/vector-icons';
const KrajIgre = (props) => {
  let promijeniEkr = props.pocetak;
  return (
    <View style={styles.modalView}>
      <Text style={styles.text}>
        Ti: {getMoveName(props.userMove)}
        {'\n'}
        Računalo: {getMoveName(props.computerMove)}
      </Text>
      <Text style={styles.text}>{props.result}</Text>
      <Text style={styles.text}>
        Pobjede: {props.wins} Porazi: {props.losses} Nerijeseno: {props.draws}
      </Text>
      <MojGumb title="Igraj Ponovno" promijeni={promijeniEkr}/>
    </View>
  );
};

const getMoveName = move => {
  if (move === 1) {
    return 'Kamen';
  } else if (move === 2) {
    return 'Papir';
  } else if (move === 3) {
    return 'Škare';
  }
};


const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  textModal: {

    fontSize: 20,
    textAlign: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: "grey",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top:'-22%',
    marginTop: 22
  },
});
export default KrajIgre;