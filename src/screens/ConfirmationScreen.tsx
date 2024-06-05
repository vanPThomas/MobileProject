import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../store/basket/slice';
import { auth } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../config/firebase';


const ConfirmationScreen = () => {
    const navigation = useNavigation();
    const basket = useSelector((state) => state.basket);
    const dispatch = useDispatch();
    const [fullName, setFullName] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');


    useEffect(() => {
      const currentUserEmail = auth.currentUser?.email;
      if (currentUserEmail) {
          setEmail(currentUserEmail);
      }
    }, []);
    
    const handleRemoveAll = () => {
        basket.forEach(item => {
          dispatch(removeBook(item));
        });
      };
    const handleConfirm = () => {
      if (fullName === '' || street === '' || houseNumber === '' || city === '') {
        Alert.alert('Error', 'Please fill out all fields.');
        return;
      }

      const newOrder = {
        fullName,
        street,
        houseNumber,
        city,
        email,
        basket
    };

    const ordersCollection = collection(db, "orders");  
      addDoc(ordersCollection, newOrder).then((docRef) => {  
          console.log("Document written with ID: ", docRef.id);  
      }).catch((error) => {  
          console.error("Error adding document: ", error);  
      }); 

      handleRemoveAll();
      Alert.alert('Confirmation', `Name: ${fullName}\nStreet: ${street}\nHouse Number: ${houseNumber}\nCity: ${city}`);
      navigation.navigate('OrderPlaced');
  };

  return (
    <View style={styles.fullscreen}>
    <ScrollView>

      <Text style={styles.text}>Full Name:</Text>
      <TextInput
        style={styles.txtInput}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter your full name"
        placeholderTextColor="#000"
      />
      <Text style={styles.text}>Street:</Text>
      <TextInput
        style={styles.txtInput}
        value={street}
        onChangeText={setStreet}
        placeholder="Enter your street"
        placeholderTextColor="#000"
      />
      <Text style={styles.text}>House Number:</Text>
      <TextInput
        style={styles.txtInput}
        value={houseNumber}
        onChangeText={setHouseNumber}
        placeholder="Enter your house number"
        placeholderTextColor="#000"
        keyboardType="numeric"
      />
      <Text style={styles.text}>City:</Text>
      <TextInput
        style={styles.txtInput}
        value={city}
        onChangeText={setCity}
        placeholder="Enter your city"
        placeholderTextColor="#000"
      />

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttontext}>Confirm</Text>
      </TouchableOpacity>

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
      </ScrollView>

    </View>
  );
};

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
      height: 30
    },
    buttontext:{
      fontFamily: 'IBM',
      fontSize: 30,
      textAlign: 'center',  
  },
  txtInput: {  
    backgroundColor: "#0f0",  
    height: 48,
    width: 300,
    margin: 16,  
    paddingHorizontal: 16,  
    borderWidth: 2,  
    borderRadius: 8,  
    borderColor: "#0f0",  
    fontFamily: "IBM",  
    fontSize: 20,
  },
  buttonContainer: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
  });

export default ConfirmationScreen;
