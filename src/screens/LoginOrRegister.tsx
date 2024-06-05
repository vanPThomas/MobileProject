import React from 'react';  
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';  
import {useNavigation} from '@react-navigation/native';

  
const LoginOrRegister = ({}) => {  
  const navigation = useNavigation();
  
  return (
    <View style={styles.fullscreen}>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
      >
          <Text style={styles.buttontext}> Login </Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.button}
      >
          <Text style={styles.buttontext}> Register </Text>
      </TouchableOpacity>
    </View>
      <View style={styles.foregroundImage} pointerEvents="none">
        <Image
          source={require('../../assets/scanlines.png')}
          style={{ flex: 1 }}
        />
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

export default LoginOrRegister;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f0',
      position: "relative"
    },
    scrollView: {
      padding: 5
    },
    listItem: {
      // width: '100%',
      padding: 5,
      backgroundColor: '#000000',
      marginBottom: 10,
      borderRadius: 5,
  
    },
    text: {
      color: '#0f0',
      fontFamily: 'IBM',
      fontSize: 25,
      textAlign: 'left',
      padding: 5,
      paddingRight:5
    },
    foregroundImage: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    fullscreen: {
      backgroundColor: '#000',
      flex: 1
    },
    button: {  
      backgroundColor: '#0f0',
      borderRadius: 5,
      color: '#000',
      fontFamily: 'IBM',
      fontSize: 20,
      height: 30,
      margin: 10
    },
    buttontext:{
      fontFamily: 'IBM',
      fontSize: 30,
      textAlign: 'center',  
  },
  buttonContainer: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
  });
  