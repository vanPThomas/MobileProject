import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ParkingListScreen from "../screens/ParkingListScreen";
import ParkingWebViewScreen from "../screens/ParkingWebViewScreen";
import { ParkingsStackParamsList } from "./types";

const ParkingStack = createStackNavigator<ParkingsStackParamsList>();

const ParkingStackNavigator = () => {
  return (
    <ParkingStack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#2e3d4e" },
      }}>
      <ParkingStack.Screen
        name="parkingList"
        component={ParkingListScreen}
        options={{
          title: "Parkings",
        }}
      />
      <ParkingStack.Screen name="parkingWeb" component={ParkingWebViewScreen} />
    </ParkingStack.Navigator>
  );
};

export default ParkingStackNavigator;

const styles = StyleSheet.create({});
