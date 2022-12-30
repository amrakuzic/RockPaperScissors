import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import GumbPocetakIgre from '../components/GumbPocetakIgre';
import PrikazInfo from '../components/PrikazInfo';
import {Ionicons,AntDesign,Feather, FontAwesome } from '@expo/vector-icons';
const PocetniEkran = (props) => {
  let promijeniEkr = props.pocetak;
  return (
    <View style={stil.ekran}>
      <View style={stil.halfEkran}>
        <View style={stil.pocetneIkone}>
          <FontAwesome name="hand-rock-o" style={stil.odabir} />

          <FontAwesome name="hand-scissors-o" style={stil.odabir} />

          <FontAwesome name="hand-paper-o" style={stil.odabir} />
        </View>

        
      </View>
      <View style={stil.halfEkran}>
      <PrikazInfo />
        <GumbPocetakIgre
          title="Pocetak igre"
          promijeni={promijeniEkr}
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
  odabir:{
    fontSize:76,
    color:'#ffd700',
    margin:'5%'
  },
  pocetneIkone:{
    flexDirection: 'row',
  },
});

export default PocetniEkran;
