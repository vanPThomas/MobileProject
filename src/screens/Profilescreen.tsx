import React from 'react';  
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';  
import { useDispatch } from 'react-redux';  
import { logout } from '../store/login/slice';
import { useFormik } from 'formik';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { removeBook } from '../store/basket/slice';
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
  
const ProfileScreen = ({}) => {  
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((state) => state.user);
  const basket = useSelector((state) => state.basket);

  console.log(user);
  const handleRemoveAll = () => {
    basket.forEach(item => {
      dispatch(removeBook(item));
    });
  };
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async () => {
      try {
        await signOut(auth);
        dispatch(logout());
        handleRemoveAll()
        navigation.navigate('LoginOrRegister');
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <View style={styles.fullscreen}>
          <Text style={styles.text}></Text>
          <Text style={styles.text}>Profile: </Text>
          <View style={styles.listItem}>
          <Text></Text>
          <Text style={styles.text}>E-mail: </Text>
          <Text style={styles.text}>{auth.currentUser?.email}</Text>
          <Text></Text>
          <Text style={styles.text}>Display Name: </Text>
          <Text style={styles.text}>{auth.currentUser?.displayName}</Text>
          </View>

          <TouchableOpacity
                        title="Logout"
                        onPress={formik.handleSubmit} 
                        style={styles.button}
                    >
                        <Text style={styles.buttontext}> Logout </Text>
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
    </View>
  );  
};  

export default ProfileScreen;

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
  }
  });
  