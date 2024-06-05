import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ScrollView } from 'react-native-gesture-handler';  
import { useAuth } from '../hooks/useAuth';



const validationSchema = Yup.object().shape({
  displayName: Yup.string().required("Voornaam is verplicht."),
  email: Yup.string()
    .required("Email is verplicht")
    .email("Moet een geldig emailadres zijn."),
  password: Yup.string()
    .required("Wachtwoord is verplicht")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Wachtwoord moet minstens uit 8 karakters bestaan minstens 1 hoofdletter en minstens 1 cijfer."
    ),
});

const Register = () => {

  const navigation = useNavigation();
  const lastNameTxtRef = useRef();
  const { register } = useAuth();
  const { errors, values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      // Niet leeg mag zijn
      displayName: "",
      // Geldig email adres
      email: "",
      // Wachtwoord moet minstens 8 karakters bevatten -> min 1 hoofdletter en 1 cijfer
      password: "",
    },
    onSubmit: (values) => {
      ( async () => {
        try {
          console.log("Register: ", values.email, ": ", values.password);
          await register(values.email, values.password, values.displayName);
          navigation.navigate('ProfileScreen');
        } catch (error) {
          console.log(error);
        }
      })()
    },
    validationSchema: validationSchema,
  });

  return (
    <View style={{ flex: 1 }} style={styles.fullscreen}>
    <ScrollView>
      <Text style={styles.text}> Display Name</Text>
      <TextInput
        value={values.displayName}
        onChangeText={handleChange("displayName")}
        onBlur={handleBlur("displayName")}
        style={styles.txtInput}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="given-name"
        keyboardType="default"
        keyboardAppearance="dark"
        cursorColor="#0f0"
        selectionColor="#0f0"
        returnKeyType="next"
        textAlign="center"
        onSubmitEditing={(event) => {
          lastNameTxtRef.current.focus();
        }}
        placeholder="Name"
      />
      <Text style={styles.text}>{errors.displayName}</Text>

      <Text style={styles.text}>E-mail</Text>

      <TextInput
        value={values.email}
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        style={styles.txtInput}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="email"
        keyboardType="default"
        keyboardAppearance="dark"
        cursorColor="#0f0"
        selectionColor="orange"
        returnKeyType="next"
        textAlign="center"
        placeholder="Email"
      />
      <Text style={styles.text}>{errors.email}</Text>
      <Text style={styles.text}>Password</Text>

      <TextInput
        value={values.password}
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        style={styles.txtInput}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="default"
        keyboardAppearance="dark"
        cursorColor="#0f0"
        selectionColor="#0f0"
        returnKeyType="done"
        secureTextEntry
        textAlign="center"
        placeholder="Wachtwoord"
      />
      {errors.password != undefined && <Text style={styles.text}>{errors.password}</Text>}

      <TouchableOpacity
                        onPress={() => {
                          console.log("Register button pressed");
                          handleSubmit();
                          console.log("Register button pressedxx");

                        }}
                        style={styles.button}
                    >
                        <Text style={styles.buttontext}> Register </Text>
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

export default Register;

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
  margin: 16,  
  paddingHorizontal: 16,  
  borderWidth: 2,  
  borderRadius: 8,  
  borderColor: "#0f0",  
  fontFamily: "IBM",  
  fontSize: 20,  
},  
});
