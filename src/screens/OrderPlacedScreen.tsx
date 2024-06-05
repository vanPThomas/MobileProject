import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const OrderPlacedScreen = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.fullscreen}>
      <View style={styles.container}>
        <Text style={styles.text}>Your order has been placed!</Text>
        <TouchableOpacity style={styles.button} onPress={handleGoBack}>
          <Text style={styles.buttontext}>Go Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.foregroundImage} pointerEvents="none">
        <Image
          source={require('../../assets/scanlines.png')}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullscreen: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontFamily: 'IBM',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 150,
  },
  buttontext: {
    fontFamily: 'IBM',
    fontSize: 20,
    textAlign: 'center',
    color: '#0f0',
  },
  foregroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default OrderPlacedScreen;
