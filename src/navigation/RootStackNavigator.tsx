import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/bookdetails";
import Register from "../screens/AddCourseScreen";
import Details from '../../src/screens/bookdetails';  
import LoginOrRegister from "../screens/LoginOrRegister";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/Profilescreen";
import ConfirmationScreen from "../screens/ConfirmationScreen";
import OrderPlacedScreen from "../screens/OrderPlacedScreen";


const Stack = createStackNavigator();

const RootStackNavigator = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#0f0",
        headerTitleStyle: { fontFamily: "IBM" },
        ...TransitionPresets.ModalSlideFromBottomIOS
      }}
      >
      <Stack.Screen name="list" component={HomeScreen} options={{ title: "Book Shop",}}/>
      <Stack.Screen name="details" component={DetailsScreen}
        options={({ route: { params } }) => ({
          title: params.data.name,
        })}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="LoginOrRegister" component={LoginOrRegister} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
      <Stack.Screen name="OrderPlaced" component={OrderPlacedScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      
      

    </Stack.Navigator>
  );
};

export default RootStackNavigator;
