import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, useColorScheme } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState<string | null>(null); // State for fetched data
  const colorScheme = useColorScheme();
  
  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  // Fetch data when modal becomes visible
  useEffect(() => {
    if (modalVisible) {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
          setData(json.title); // Adjust based on your API response structure
        })
        .catch(error => {
          Alert.alert('Error', 'Failed to fetch data.');
          console.error(error);
        });
    }
  }, [modalVisible]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>New modal</Text>
            <Text style={styles.modalText}>{data || "Loading data..."}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.counterContainer}>
        <Pressable
          style={[styles.button, styles.buttonCounter]}
          onPress={() => setCounter(counter - 1)}>
          <Text style={styles.textStyle}>-</Text>
        </Pressable>
        <Text style={styles.counterText}>{counter}</Text>
        <Pressable
          style={[styles.button, styles.buttonCounter]}
          onPress={() => setCounter(counter + 1)}>
          <Text style={styles.textStyle}>+</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const getStyles = (isDarkMode: boolean) => StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: isDarkMode ? '#0f1108' : '#ffffff',
  },
  modalView: {
    margin: 25,
    backgroundColor: isDarkMode ? '#241909' : '#ffffff',
    borderRadius: 30,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 15,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#645853',
  },
  buttonCounter: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: isDarkMode ? '#cad8de' : '#000000',
  },
  counterText: {
    fontSize: 24,
    marginHorizontal: 20,
    color: isDarkMode ? '#cad8de' : '#000000',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default App;