import React from 'react';
import { useFormik } from 'formik';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useAuth } from '../hooks/useAuth';


const LoginScreen = () => {
  const navigation = useNavigation();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
     ( async () => {
        try {
          console.log("Login: ", values.email, ": ", values.password);
          await login(values.email, values.password);
          navigation.navigate('ProfileScreen');
        } catch (error) {
          console.log(error);
        }
      })()
    },
  });

  return (  
    <View style={styles.fullscreen}>
        <View style={styles.buttonContainer}>

      <TextInput
        style={styles.txtInput}  
        placeholder="Email"
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
      />
      <TextInput
        style={styles.txtInput}
        placeholder="Password"
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttontext}>Login</Text>
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

    </View>  
  );  
};  
  
export default LoginScreen;  
  
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