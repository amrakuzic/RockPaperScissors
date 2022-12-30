import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';
function PrikazInfo() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>Test</Text>
      </TouchableOpacity>
      <Modal
        //animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}

      >
<TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
<View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Text style={styles.textModal}>Kamen pobjeđuje škare</Text>
                <Text style={styles.textModal}>Škare pobjeđuju papir</Text>
                <Text style={styles.textModal}>Papir pobjeđuje kamen</Text>
          </View>
        </View>
</TouchableWithoutFeedback>

      </Modal>
    </View>
  );
}
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
    backgroundColor: "white",
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
export default PrikazInfo;