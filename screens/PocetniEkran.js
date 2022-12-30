import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import GumbPocetakIgre from '../components/GumbPocetakIgre';
import PrikazInfo from '../components/PrikazInfo';

const PocetniEkran = (props) => {
  return (
    <View style={stil.ekran}>
      <View style={stil.halfEkran}>
        <PrikazInfo />
      </View>
      <View style={stil.halfEkran}>
        <GumbPocetakIgre
          title="Pocetak igre"
          onPress={() => {props.pocetak(2)}}
        />
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    padding: 0,
    alignItems: 'center',
    backgroundColor: '#3f3f3f',
    marginTop:25,
    width:'100%',
    height:'100%',
  },
  tekst:{
    fontSize :25,
    color: '#ffffff',
  },
  halfEkran:{
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PocetniEkran;